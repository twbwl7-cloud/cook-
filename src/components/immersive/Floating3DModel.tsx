"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink backdrop-blur">
        טוען… <bdi>{progress.toFixed(0)}%</bdi>
      </div>
    </Html>
  );
}

function GoldKnot() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Placeholder for future GLB ≤2MB — MeshBasicMaterial keeps 60FPS */}
      <mesh>
        <torusKnotGeometry args={[1, 0.32, 128, 18]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.85}
          roughness={0.28}
          envMapIntensity={0.9}
        />
      </mesh>
      <mesh position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 48]} />
        <meshBasicMaterial color="#0D0D0D" transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

export default function Floating3DModel() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 180);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[340px] w-full cursor-grab bg-transparent active:cursor-grabbing sm:h-[420px] lg:h-[520px]">
      {/* LCP poster — static first */}
      {!ready && (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-40 w-40 rounded-full gold-gradient opacity-80 blur-[2px] contact-shadow sm:h-52 sm:w-52" />
        </div>
      )}
      {ready && (
        <Canvas
          camera={{ position: [0, 0.2, 5.2], fov: 42 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.75} />
          <directionalLight position={[4, 6, 2]} intensity={1.1} color="#fff6e0" />
          <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#ffd1dc" />
          <Suspense fallback={<Loader />}>
            <GoldKnot />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      )}
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] tracking-wide text-ink-muted/80">
        גררו לסיבוב · DRAG
      </p>
    </div>
  );
}
