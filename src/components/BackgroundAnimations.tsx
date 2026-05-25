"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import * as THREE from "three";

// 品牌颜色（更鲜艳的版本）
const COLORS = ["#E8F594", "#F5B8C8", "#F78C59", "#97BDFC"];

// 物理参数配置 - 优化版本
const PHYSICS_CONFIG = {
    friction: 0.995,          // 摩擦力（接近真空状态，减速很慢）
    bounce: 0.85,             // 边界回弹弹性（增大）
    collisionDistance: 1.5,   // 碰撞检测距离（减小，更容易碰撞）
    collisionForce: 0.03,     // 碰撞排斥力（增大）
    floatAmplitude: 0.012,    // 浮动幅度
    floatSpeed: 0.15,         // 浮动速度
    wheelForce: 0.005,        // 滚轮冲量
    rotationDamping: 0.998,   // 旋转阻尼
    clickForce: 0.25,         // 点击爆炸力（大幅增大）
    clickRadius: 8,           // 点击影响半径（增大）
    clickGlobalImpulse: 0.03, // 点击时给所有物体的全局扰动
  };

// 方块配置
const BOX_CONFIG = {
  count: 20,      // 减少方块数量
  minSize: 1.0,   // 减小最小尺寸
  maxSize: 2.0,   // 减小最大尺寸
};

// 动态边界范围（基于相机视锥体计算）
interface DynamicBoundaries {
  x: [number, number];
  y: [number, number];
  z: [number, number];
}

// 根据相机视锥体计算边界（确保边界对应屏幕边缘）
const calculateBoundaries = (camera: THREE.PerspectiveCamera): DynamicBoundaries => {
  // 创建一个用于计算的虚拟点，放在平均深度位置
  const targetZ = 0; // 中心位置
  
  // 计算视锥体在 targetZ 深度的边界
  const fov = camera.fov * (Math.PI / 180);
  const aspect = camera.aspect;
  const cameraZ = camera.position.z;
  
  // 计算在目标深度的可见范围
  const distance = cameraZ - targetZ;
  const halfHeight = Math.tan(fov / 2) * distance;
  const halfWidth = halfHeight * aspect;
  
  // 留出一点边距
  const margin = 0.1;
  
  return {
    x: [-halfWidth * (1 - margin), halfWidth * (1 - margin)],
    y: [-halfHeight * (1 - margin), halfHeight * (1 - margin)],
    z: [-4, 4],
  };
};

interface BoxData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;   // 速度向量
  angularVelocity: THREE.Vector3;  // 角速度向量
  floatOffset: number;       // 浮动相位偏移
  initialPos: THREE.Vector3; // 初始位置
  size: number;              // 方块尺寸
}

interface BackgroundAnimationsProps {
  menuOpen?: boolean;
}

export default function BackgroundAnimations({ menuOpen = false }: BackgroundAnimationsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  // 使用状态触发重新渲染
  const [key, setKey] = useState(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const boxesRef = useRef<BoxData[]>([]);
  const animationIdRef = useRef<number>(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);
  const boundariesRef = useRef<DynamicBoundaries>({
    x: [-4, 4],
    y: [-3, 3],
    z: [-3, 3],
  });
  // 使用 ref 存储 menuOpen 的最新值，解决闭包问题
  const menuOpenRef = useRef(menuOpen);
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  // 监听路径变化，触发重新初始化
  useEffect(() => {
    if (pathname === '/') {
      // 重置 scrollY
      scrollYRef.current = 0;
      // 强制滚动到顶部
      window.scrollTo(0, 0);
      // 触发重新初始化
      setKey(prev => prev + 1);
    }
  }, [pathname]);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;

    // 重置 scrollY
    scrollYRef.current = 0;
    // 强制滚动到顶部
    window.scrollTo(0, 0);

    // 清理之前的渲染器（如果存在）
    if (rendererRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
      containerRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    // 创建场景
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 添加环境光（增强亮度）
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xD7E294, 0.6);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // 添加额外的补光
    const pointLight3 = new THREE.PointLight(0xffffff, 0.5);
    pointLight3.position.set(0, 5, 5);
    scene.add(pointLight3);

    // 初始化边界（根据相机视锥体计算）
    const boundaries = calculateBoundaries(camera);
    boundariesRef.current = boundaries;

    // 创建物理方块
    const boxes: BoxData[] = [];
    for (let i = 0; i < BOX_CONFIG.count; i++) {
      // 随机方块大小
      const size = BOX_CONFIG.minSize + Math.random() * (BOX_CONFIG.maxSize - BOX_CONFIG.minSize);
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshStandardMaterial({
        color: COLORS[i % 4],
        roughness: 0.15,
        metalness: 0.1,
        emissive: COLORS[i % 4],
        emissiveIntensity: 0.45,
        flatShading: true,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // 根据视锥体边界随机分布
      const halfSize = size / 2;
      const posX = boundaries.x[0] + halfSize + Math.random() * (boundaries.x[1] - boundaries.x[0] - size);
      const posY = boundaries.y[0] + halfSize + Math.random() * (boundaries.y[1] - boundaries.y[0] - size);
      const posZ = boundaries.z[0] + halfSize + Math.random() * (boundaries.z[1] - boundaries.z[0] - size);

      mesh.position.set(posX, posY, posZ);

      // 随机初始旋转
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(mesh);

      // 给每个方块一个微小的随机初始速度
      const randomSpeed = 0.002;
      boxes.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * randomSpeed,
          (Math.random() - 0.5) * randomSpeed,
          (Math.random() - 0.5) * randomSpeed
        ),
        angularVelocity: new THREE.Vector3(0, 0, 0),  // 不自转
        floatOffset: (i / BOX_CONFIG.count) * Math.PI * 2,
        initialPos: new THREE.Vector3(posX, posY, posZ),
        size,
      });
    }
    boxesRef.current = boxes;

    // 鼠标移动处理
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 6,
        y: -(e.clientY / window.innerHeight - 0.5) * 6,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 点击爆炸效果 - 点击屏幕任意位置，所有方块都会被扰动
    const handleClick = (e: MouseEvent) => {
      // 将鼠标坐标转换为Three.js射线
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      
      // 获取所有方块的mesh
      const meshes = boxesRef.current.map(box => box.mesh);
      const intersects = raycaster.intersectObjects(meshes);
      
      // 获取点击位置
      const clickPoint = new THREE.Vector3();
      const direction = raycaster.ray.direction.clone();
      
      if (intersects.length > 0) {
        clickPoint.copy(intersects[0].point);
      } else {
        clickPoint.copy(raycaster.ray.origin).add(direction.multiplyScalar(6));
      }
      
      // 对所有方块施加力
      boxesRef.current.forEach((box) => {
        const pos = box.mesh.position;
        const dx = pos.x - clickPoint.x;
        const dy = pos.y - clickPoint.y;
        const dz = pos.z - clickPoint.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < PHYSICS_CONFIG.clickRadius && distance > 0.1) {
          // 距离越近，力越大
          const force = (PHYSICS_CONFIG.clickRadius - distance) / PHYSICS_CONFIG.clickRadius;
          const impulse = force * PHYSICS_CONFIG.clickForce;
          
          const nx = dx / distance;
          const ny = dy / distance;
          const nz = dz / distance;
          
          // 施加向外的冲量
          box.velocity.x += nx * impulse;
          box.velocity.y += ny * impulse;
          box.velocity.z += nz * impulse;
        } else {
          // 对范围外的方块也施加一个小的随机扰动
          box.velocity.x += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
          box.velocity.y += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
          box.velocity.z += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
        }
      });
    };
    window.addEventListener("click", handleClick);

    // 滚轮事件处理 - 每次滚动只施加一次冲量
    const handleWheel = (e: WheelEvent) => {
      // 当菜单打开时，允许弹窗内容正常滚动，不阻止默认行为
      // 但仍然响应滚轮事件来控制背景动画
      // 使用 ref 避免闭包问题，确保获取最新的 menuOpen 状态
      if (!menuOpenRef.current) {
        e.preventDefault();
      }
      const delta = e.deltaY > 0 ? 1 : -1;
      // 使用更大的冲量系数
      const impulse = PHYSICS_CONFIG.wheelForce * Math.abs(e.deltaY) * 0.05;
      
      boxesRef.current.forEach((box) => {
        // 计算切向力（围绕X轴旋转）
        const pos = box.mesh.position;
        const dy = pos.y;
        const dz = pos.z;
        const dist = Math.sqrt(dy * dy + dz * dz);
        
        if (dist > 0.1) {
          // 计算切向方向（围绕X轴）
          const tangentY = -dz / dist;
          const tangentZ = dy / dist;
          
          // 施加一次冲量（不是持续力）
          box.velocity.y += tangentY * delta * impulse;
          box.velocity.z += tangentZ * delta * impulse;
        }
      });
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    // 页面滚动处理
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // 窗口大小调整
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      
      // 更新边界（根据新的相机视锥体）
      boundariesRef.current = calculateBoundaries(cameraRef.current);
      
      // 将所有方块约束到新边界内
      boxesRef.current.forEach((box) => {
        handleBoundaryCollision(box);
      });
    };
    window.addEventListener("resize", handleResize);

    // 边界碰撞检测和回弹（考虑方块大小和动态边界）
    const handleBoundaryCollision = (box: BoxData) => {
      const pos = box.mesh.position;
      const bounce = PHYSICS_CONFIG.bounce;
      const halfSize = box.size / 2;  // 方块半尺寸
      const boundaries = boundariesRef.current;
      let hasCollision = false;
      
      // X轴边界
      if (pos.x < boundaries.x[0] + halfSize) {
        pos.x = boundaries.x[0] + halfSize;
        box.velocity.x = -box.velocity.x * bounce;
        hasCollision = true;
      } else if (pos.x > boundaries.x[1] - halfSize) {
        pos.x = boundaries.x[1] - halfSize;
        box.velocity.x = -box.velocity.x * bounce;
        hasCollision = true;
      }
      
      // Y轴边界
      if (pos.y < boundaries.y[0] + halfSize) {
        pos.y = boundaries.y[0] + halfSize;
        box.velocity.y = -box.velocity.y * bounce;
        hasCollision = true;
      } else if (pos.y > boundaries.y[1] - halfSize) {
        pos.y = boundaries.y[1] - halfSize;
        box.velocity.y = -box.velocity.y * bounce;
        hasCollision = true;
      }
      
      // Z轴边界
      if (pos.z < boundaries.z[0] + halfSize) {
        pos.z = boundaries.z[0] + halfSize;
        box.velocity.z = -box.velocity.z * bounce;
        hasCollision = true;
      } else if (pos.z > boundaries.z[1] - halfSize) {
        pos.z = boundaries.z[1] - halfSize;
        box.velocity.z = -box.velocity.z * bounce;
        hasCollision = true;
      }
      
      return hasCollision;
    };

    // 物理碰撞检测和响应（微弱）
    const handleCollisions = () => {
      const boxes = boxesRef.current;
      
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const box1 = boxes[i];
          const box2 = boxes[j];
          
          // 计算距离
          const dx = box2.mesh.position.x - box1.mesh.position.x;
          const dy = box2.mesh.position.y - box1.mesh.position.y;
          const dz = box2.mesh.position.z - box1.mesh.position.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // 如果距离小于碰撞距离，施加微弱排斥力
          if (dist < PHYSICS_CONFIG.collisionDistance && dist > 0.1) {
            const force = (PHYSICS_CONFIG.collisionDistance - dist) / dist * PHYSICS_CONFIG.collisionForce;
            
            // 互相排斥
            box1.velocity.x -= dx * force;
            box1.velocity.y -= dy * force;
            box1.velocity.z -= dz * force;
            
            box2.velocity.x += dx * force;
            box2.velocity.y += dy * force;
            box2.velocity.z += dz * force;
          }
        }
      }
    };

    // 动画循环
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = performance.now() / 1000;

      // 检测碰撞
      handleCollisions();

      // 更新方块
      boxesRef.current.forEach((box) => {
        // 添加柔和的浮动力（三个轴都有浮动）
        const floatX = Math.sin(time * PHYSICS_CONFIG.floatSpeed + box.floatOffset) * PHYSICS_CONFIG.floatAmplitude;
        const floatY = Math.cos(time * PHYSICS_CONFIG.floatSpeed * 0.8 + box.floatOffset * 1.2) * PHYSICS_CONFIG.floatAmplitude;
        const floatZ = Math.sin(time * PHYSICS_CONFIG.floatSpeed * 1.2 + box.floatOffset * 0.8) * PHYSICS_CONFIG.floatAmplitude;

        // 应用摩擦力（接近真空状态，减速很慢）
        box.velocity.multiplyScalar(PHYSICS_CONFIG.friction);
        
        // 应用旋转阻尼
        box.angularVelocity.x *= PHYSICS_CONFIG.rotationDamping;
        box.angularVelocity.y *= PHYSICS_CONFIG.rotationDamping;
        box.angularVelocity.z *= PHYSICS_CONFIG.rotationDamping;

        // 更新位置（公转速度 + 浮动）
        box.mesh.position.x += box.velocity.x + floatX;
        box.mesh.position.y += box.velocity.y + floatY;
        box.mesh.position.z += box.velocity.z + floatZ;

        // 检测边界碰撞并回弹
        handleBoundaryCollision(box);

        // 限制最大速度（增大限制以允许滚轮产生足够的速度）
        const maxSpeed = 0.2;
        const speed = box.velocity.length();
        if (speed > maxSpeed) {
          box.velocity.multiplyScalar(maxSpeed / speed);
        }
      });

      // 更新相机位置
      if (cameraRef.current) {
        const targetY = scrollYRef.current * 0.01;
        cameraRef.current.position.y +=
          (targetY - cameraRef.current.position.y) * 0.05;
        cameraRef.current.position.z = 8 + scrollYRef.current * 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 清理
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      boxesRef.current = [];
      boxes.forEach((box) => {
        box.mesh.geometry.dispose();
        (box.mesh.material as THREE.Material).dispose();
      });
    };
  }, [key]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
      }}
    />
  );
}
