"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function GenesisModel() {
  const { scene } = useGLTF("/models/genesis.glb");
  return <primitive object={scene} scale={1.8} />;
}

export default function CanvasComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
        Loading 3D Model...
      </div>
    );
  }

  return (
    <Canvas 
      camera={{ position: [0, 1.5, 4], fov: 45 }}
      onCreated={(state) => {
        state.gl.setClearColor(0x000000);
      }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <Environment preset="studio" />
      <GenesisModel />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minDistance={2}
        maxDistance={8}
        autoRotate={true}
        autoRotateSpeed={3}
      />
    </Canvas>
  );
}
