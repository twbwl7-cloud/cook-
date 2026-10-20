"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { useCakeBuilderStore } from "@/store/cakeBuilder";

function LiveCake() {
  const tiers = useCakeBuilderStore((s) => s.tiers);
  const flavor = useCakeBuilderStore((s) => s.flavor);
  const decors = useCakeBuilderStore((s) => s.decors);
  const plaqueText = useCakeBuilderStore((s) => s.plaqueText);

  const frosting = useMemo(() => {
    const map: Record<string, string> = {
      velvet_rose: "#F2C4CE",
      belgian_chocolate: "#3D2B1F",
      vanilla_gold: "#E8D5C4",
    };
    return new THREE.MeshBasicMaterial({ color: map[flavor] });
  }, [flavor]);

  const gold = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#D4AF37" }),
    [],
  );
  const plate = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#121212" }),
    [],
  );

  return (
    <group position={[0, -0.2, 0]}>
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.4, 48]} />
        <primitive object={plate} attach="material" />
      </mesh>

      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.1, 1.15, 0.5, 48]} />
        <primitive object={frosting} attach="material" />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <torusGeometry args={[1.0, 0.05, 8, 48]} />
        <primitive object={gold} attach="material" />
      </mesh>

      {tiers >= 2 && (
        <>
          <mesh position={[0, 0.48, 0]}>
            <cylinderGeometry args={[0.82, 0.88, 0.45, 48]} />
            <primitive object={frosting} attach="material" />
          </mesh>
          <mesh position={[0, 0.72, 0]}>
            <torusGeometry args={[0.75, 0.045, 8, 48]} />
            <primitive object={gold} attach="material" />
          </mesh>
        </>
      )}

      {tiers >= 3 && (
        <>
          <mesh position={[0, 1.02, 0]}>
            <cylinderGeometry args={[0.52, 0.6, 0.4, 48]} />
            <primitive object={frosting} attach="material" />
          </mesh>
          <mesh position={[0, 1.25, 0]}>
            <torusGeometry args={[0.46, 0.04, 8, 48]} />
            <primitive object={gold} attach="material" />
          </mesh>
        </>
      )}

      {decors.includes("macaron_crown") && (
        <mesh position={[0, tiers === 1 ? 0.35 : tiers === 2 ? 0.95 : 1.45, 0]}>
          <torusGeometry args={[0.35, 0.08, 8, 24]} />
          <primitive object={gold} attach="material" />
        </mesh>
      )}

      {decors.includes("gold_leaf") && (
        <mesh position={[0.5, 0.1, 0.7]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <primitive object={gold} attach="material" />
        </mesh>
      )}

      {decors.includes("name_topper") && plaqueText && (
        <mesh position={[0, tiers === 1 ? 0.4 : tiers === 2 ? 1.0 : 1.5, 0.55]}>
          <boxGeometry args={[0.9, 0.18, 0.04]} />
          <primitive object={gold} attach="material" />
        </mesh>
      )}
    </group>
  );
}

export function BuilderCakePreview() {
  return (
    <div className="relative h-[320px] w-full rounded-[1.25rem] border border-gold-luxury/30 bg-black-matte sm:h-[420px]">
      <Canvas
        camera={{ position: [0, 1.2, 3.4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <LiveCake />
        </Float>
        <ContactShadows
          position={[0, -0.9, 0]}
          opacity={0.55}
          scale={10}
          blur={2.4}
          far={4}
          color="#0D0D0D"
        />
      </Canvas>
      <p className="pointer-events-none absolute bottom-3 inset-x-0 text-center text-[10px] font-bold text-pink-baby/70">
        הדמיית תלת־ממד אינטראקטיבית
      </p>
    </div>
  );
}
