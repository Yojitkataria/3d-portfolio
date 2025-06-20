import { meshBounds, useGLTF } from '@react-three/drei'
import React from 'react'
import { Mesh } from 'three'
import skyScene from '../assets/3d/sky.glb'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyref = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
        skyref.current.rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
      }
    })
    return (
    <mesh ref={skyref}>
        <primitive object ={sky.scene} />

    </mesh>
  )
}

export default Sky