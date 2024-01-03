import { useGLTF } from '@react-three/drei'

export function Suzanne() {
  const { nodes } = useGLTF('./models/suzanne.gltf')
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={nodes.Suzanne.material} position={[0, 0.189, -0.043]} />
    </group>
  )
}

useGLTF.preload('./models/suzanne.gltf')
