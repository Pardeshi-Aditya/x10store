import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

interface ModelProps {
  path : string,
  scale : number[],
}

interface GLBViewerProps {
  modelPath : string,
  scale : number[],
}

const Model = ({ path, scale } : ModelProps) => {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} scale={scale} />;
};

const GLBViewer = ({ modelPath, scale } : GLBViewerProps) => {
  return (
    <Canvas
      camera={{ position: [25, 25, 25], near: 0.1, far: 1000 }} // Adjusted camera position
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model path={modelPath} scale={scale} />
      </Suspense>
      <OrbitControls
        target={[0, 0, 0]} // Center the controls on the model
        minDistance={25} // Adjusted minimum distance
        maxDistance={60} // Adjusted maximum distance
        minPolarAngle={Math.PI / 6} // Keep the minimum angle above the horizon
        maxPolarAngle={Math.PI - Math.PI / 6} // Keep the maximum angle below the zenith
      />
    </Canvas>
  );
};

export default GLBViewer;
