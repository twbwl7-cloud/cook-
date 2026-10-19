"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-pink-soft">
        טוען עוגה… <bdi>{progress.toFixed(0)}%</bdi>
      </div>
    </Html>
  );
}

/** White+gold crown cake — rotatable 360° (book A23 / P23 mental simulation). */
function StudioCake() {
  const group = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/cakes/hero/round-gold-crown.jpg");

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
  }, [texture]);

  // Gentle idle sway only when not dragging — OrbitControls handles spin
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.08;
  });

  const frosting = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#FFFAFC",
        roughness: 0.55,
        metalness: 0.05,
      }),
    [],
  );
  const gold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D4AF37",
        roughness: 0.28,
        metalness: 0.92,
      }),
    [],
  );
  const board = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F5F5F5",
        roughness: 0.7,
        metalness: 0.1,
      }),
    [],
  );
  const photoMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      }),
    [texture],
  );

  return (
    <group ref={group} position={[0, -0.35, 0]}>
      {/* Cake board */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <cylinderGeometry args={[1.55, 1.55, 0.06, 64]} />
        <primitive object={board} attach="material" />
      </mesh>

      {/* Cake body */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[1.15, 1.2, 1.05, 64]} />
        <primitive object={frosting} attach="material" />
      </mesh>

      {/* Top frosting disc with real photo (front-facing reference) */}
      <mesh position={[0, 1.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.05, 64]} />
        <primitive object={photoMat} attach="material" />
      </mesh>

      {/* Piped rim */}
      <mesh position={[0, 1.05, 0]}>
        <torusGeometry args={[1.05, 0.07, 16, 64]} />
        <primitive object={frosting.clone()} attach="material" />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <torusGeometry args={[1.18, 0.06, 16, 64]} />
        <primitive object={frosting.clone()} attach="material" />
      </mesh>

      {/* Gold crown */}
      <group position={[0, 1.35, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.28, 0.12, 6]} />
          <primitive object={gold} attach="material" />
        </mesh>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i / 6) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 0.22, 0.18, Math.sin(a) * 0.22]}
              castShadow
            >
              <coneGeometry args={[0.045, 0.22, 4]} />
              <primitive object={gold} attach="material" />
            </mesh>
          );
        })}
      </group>

      {/* Gold leaf flecks */}
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const r = 0.55 + (i % 3) * 0.18;
        return (
          <mesh
            key={`flake-${i}`}
            position={[Math.cos(a) * r, 0.35 + (i % 5) * 0.12, Math.sin(a) * r]}
            rotation={[Math.random(), a, 0.4]}
          >
            <boxGeometry args={[0.06, 0.01, 0.04]} />
            <primitive object={gold} attach="material" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroCake3D() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative h-[380px] w-full cursor-grab active:cursor-grabbing sm:h-[460px] lg:h-[540px]">
      {/* LCP poster — book A01: first screen never waits on 3D */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[88%] w-[88%] overflow-hidden rounded-full border-2 border-ink/80 contact-shadow">
            <Image
              src="/cakes/hero/round-gold-crown.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 90vw, 480px"
            />
          </div>
        </div>
      )}

      {ready && (
        <Canvas
          camera={{ position: [0, 1.4, 4.2], fov: 38 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          shadows
        >
          <color attach="background" args={["#00000000"]} />
          <ambientLight intensity={0.65} />
          <directionalLight
            position={[4, 6, 3]}
            intensity={1.25}
            castShadow
            shadow-mapSize={[1024, 1024]}
            color="#fff6e8"
          />
          <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#ffd1dc" />
          <Suspense fallback={<Loader />}>
            <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
              <StudioCake />
            </Float>
            <ContactShadows
              position={[0, -0.35, 0]}
              opacity={0.45}
              scale={8}
              blur={2.4}
              far={4}
              color="#0D0D0D"
            />
            <Environment preset="city" environmentIntensity={0.35} />
          </Suspense>
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3.2}
            maxPolarAngle={Math.PI / 1.85}
            autoRotate={false}
            rotateSpeed={0.85}
          />
        </Canvas>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
        <span className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold tracking-wide text-pink-soft">
          גררו לסיבוב 360° · DRAG
        </span>
      </div>
    </div>
  );
}
