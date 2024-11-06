import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Diamond(props) {
  const { nodes, materials } = useGLTF('/diamond.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['White Gold']}
        position={[0, 0, 0.001]}
        scale={[1.016, 0.865, 1.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj.geometry}
        material={materials.Material_2}
        position={[0, 0, 0.103]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj001.geometry}
        material={materials.Material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj003.geometry}
        material={materials.Material_2}
        position={[0.036, 0, -0.071]}
        rotation={[0.125, 0.942, 0.329]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Prong001.geometry}
        material={materials['White Gold']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials['White Gold']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006_1.geometry}
        material={materials['White Gold 2']}
      />
    </group>
  )
}

useGLTF.preload('/diamond.glb')