import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Smooth movement towards mouse position
      meshRef.current.position.x += (mousePosition.x * 2 - meshRef.current.position.x) * 0.02;
      meshRef.current.position.y += (mousePosition.y * 2 - meshRef.current.position.y) * 0.02;
    }
  });

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  // Add mouse move listener
  useState(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black to-[#0a192f] text-white">
      <div className="absolute inset-0">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <AnimatedSphere />
        </Canvas>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-5xl font-bold md:text-7xl"
          >
            Mohan Reddy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-gray-300"
          >
            Computer Science Engineering Student & Full Stack Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="#contact" className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Contact Me
            </a>
            <a href="#projects" className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
              View Work
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a href="https://github.com" className="text-gray-300 transition hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 transition hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-300 transition hover:text-white">
              <Mail size={24} />
            </a>
            <a href="/resume.pdf" className="text-gray-300 transition hover:text-white">
              <FileText size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}