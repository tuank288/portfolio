import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import ParallaxBackground from "@/components/backgrounds/parallaxBackground";
import Loader from "@/components/common/Loader";
import { SpaceShip } from "@/components/ui/SpaceShip";
import HeroText from "@/components/ui/HeroText";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0">
        <Canvas
          shadows
          camera={{ position: [0, 1, 3], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
          }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <SpaceShip
                scale={isMobile ? 0.2 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [2, 0, -1]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
