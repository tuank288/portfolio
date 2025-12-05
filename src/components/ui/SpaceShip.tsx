import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import type { Group } from "three";

export function SpaceShip(props: { scale?: number; position?: [number, number, number] }) {
  const group = useRef<Group>(null!);

  const { nodes, materials, animations } = useGLTF(
    '/models/multi_universe_space_ship_3d_model.glb'
  ) as any;

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Baked_Animations_Intergalactic_Spaceships_Version_2_0"
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Empty_9" position={[-1.075, 0.256, -5.542]} />
              <group name="Empty001_10" position={[1.149, 0.253, -5.541]} />
              <group
                name="Circle_11"
                position={[-1.025, 0.18, -5.284]}
                scale={[1.021, 1.021, 1.487]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name="Circle001_12"
                position={[1.033, 0.175, -5.274]}
                scale={[1.021, 1.021, 1.487]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group
                name="Torus000_13"
                position={[1.034, 0.175, -9.674]}
                rotation={[0, 0, -0.628]}
                scale={0.037}>
                <mesh
                  name="mesh_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_3.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_3.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus001_14"
                position={[-1.025, 0.18, -8.707]}
                rotation={[0, 0, -1.885]}
                scale={0.239}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name="Torus002_15"
                position={[-1.025, 0.18, -7.729]}
                rotation={[0, 0, -3.142]}
                scale={0.89}>
                <mesh
                  name="mesh_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_5.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_5.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_5.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus003_16"
                position={[-1.025, 0.18, -6.751]}
                rotation={[0, 0, -1.885]}
                scale={1.229}>
                <mesh
                  name="mesh_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_6.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_6.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_6.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus004_17"
                position={[-1.025, 0.18, -5.773]}
                rotation={[0, 0, -0.139]}
                scale={1.06}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name="Torus005_18"
                position={[1.033, 0.175, -6.741]}
                rotation={[0, 0, -1.885]}
                scale={1.229}>
                <mesh
                  name="mesh_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_8.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_8.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus006_19"
                position={[1.033, 0.175, -7.719]}
                rotation={[0, 0, -3.142]}
                scale={0.89}>
                <mesh
                  name="mesh_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_9.geometry}
                  material={materials['Material.003']}
                  morphTargetDictionary={nodes.mesh_9.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_9.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus007_20"
                position={[1.033, 0.175, -8.696]}
                rotation={[0, 0, -1.885]}
                scale={0.239}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials['Material.003']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/multi_universe_space_ship_3d_model.glb')