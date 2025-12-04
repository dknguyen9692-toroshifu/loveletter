import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Extend JSX.IntrinsicElements to support React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      directionalLight: any;
      group: any;
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      coneGeometry: any;
    }
  }
}

const Cloud = ({ position, scale, opacity = 0.8 }: { position: [number, number, number], scale: number, opacity?: number }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <group position={position} scale={scale}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={opacity} roughness={1} />
        </mesh>
        <mesh position={[0.8, -0.2, 0]}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={opacity} roughness={1} />
        </mesh>
        <mesh position={[-0.8, -0.1, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={opacity} roughness={1} />
        </mesh>
        <mesh position={[0.4, 0.4, 0.4]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={opacity} roughness={1} />
        </mesh>
      </group>
    </Float>
  );
};

const PaperPlane = ({ position, rotation, color }: { position: [number, number, number], rotation: [number, number, number], color: string }) => {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
            group.current.position.x += 0.005;
            if (group.current.position.x > 10) {
                group.current.position.x = -10;
            }
        }
    });

    return (
        <group ref={group} position={position} rotation={rotation}>
            <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
                 {/* Simple geometry representing a paper plane */}
                <mesh rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.2, 0.8, 3]} />
                    <meshStandardMaterial color={color} roughness={0.8} />
                </mesh>
            </Float>
        </group>
    );
}

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fff5e6" />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#c1e1c1" />

        <Cloud position={[-4, 2, -5]} scale={1.5} opacity={0.9} />
        <Cloud position={[4, -2, -3]} scale={1.2} opacity={0.8} />
        <Cloud position={[0, 3, -8]} scale={2} opacity={0.6} />
        <Cloud position={[-6, -3, -6]} scale={1} opacity={0.7} />

        <PaperPlane position={[-3, 0, 0]} rotation={[0, 0, -0.2]} color="#a7c7e7" />
        <PaperPlane position={[-6, 2, -2]} rotation={[0, 0, -0.1]} color="#f4c2c2" />
        <PaperPlane position={[-8, -2, -4]} rotation={[0, 0, 0.1]} color="#fdfd96" />

        <Environment preset="sunset" blur={0.8} />
      </Canvas>
    </div>
  );
};