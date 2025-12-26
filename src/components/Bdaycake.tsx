import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube007_Chocolate_0: THREE.Mesh;
    Plane004_Icecream2003_0: THREE.Mesh;
    Plane004_Icecream2001_0: THREE.Mesh;
    Cube002_Chocolate_0: THREE.Mesh;
    Circle_Material001_0: THREE.Mesh;
  };
  materials: {
    Chocolate: THREE.MeshBasicMaterial;
    ["Icecream2.003"]: THREE.MeshBasicMaterial;
    ["Icecream2.001"]: THREE.MeshBasicMaterial;
    ["Material.001"]: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};

export function Bdaycake(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/birthday_cake.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-11.016, -18.055, 5.606]}
        rotation={[-1.576, 0, -0.022]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[16.686, 144.308, 72.798]}
            rotation={[-1.157, -0.302, 2.48]}
            scale={30.737}
          >
            <mesh
              geometry={nodes.Plane004_Icecream2003_0.geometry}
              material={materials["Icecream2.003"]}
            />
            <mesh
              geometry={nodes.Plane004_Icecream2001_0.geometry}
              material={materials["Icecream2.001"]}
            />
          </group>
          <mesh
            geometry={nodes.Cube007_Chocolate_0.geometry}
            material={materials.Chocolate}
            position={[12.055, 148.374, 29.088]}
            rotation={[-0.497, 0.996, -0.164]}
            scale={28.152}
          />
          <mesh
            geometry={nodes.Cube002_Chocolate_0.geometry}
            material={materials.Chocolate}
            position={[-50.098, 161.113, -10.909]}
            rotation={[-1.327, 1.407, -0.568]}
            scale={63.051}
          />
          <mesh
            geometry={nodes.Circle_Material001_0.geometry}
            material={materials["Material.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/birthday_cake.glb");
