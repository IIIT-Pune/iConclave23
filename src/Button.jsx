import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';
import gsap from 'gsap'

export default function Button({ buttonText, buttonSize , xPos, zPos}) {
 
  const line = useRef();
  const halfExtent = { x: buttonSize / 1.4, y: 0.8 , z: 0 };


  const onEnter = () =>
    {
        document.body.style.cursor = 'pointer'
        gsap.to(line.current.position, { duration: 0.3, ease: 'back.out(2.5)', z: 0.2 })
    }
  
  const onLeave = () =>
    {
        document.body.style.cursor = 'default'
        gsap.to(line.current.position, { duration: 0.2, z: 0 })
    }

  const onClick = () =>
    {
        window.open('https://threejs-journey.com/join/2022blackfriday', '_blank')
    }

  return (
    <group position={[ xPos , 0.00, zPos]} rotation-x={-Math.PI * 0.5} onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <mesh visible={false}
         nPointerEnter={ onEnter }
        onPointerLeave={ onLeave }
        onClick={ onClick }
      >
        <planeGeometry args={[halfExtent.x * 2, halfExtent.y * 2]} />
      </mesh>

      <Line
        points={[
          [-halfExtent.x, halfExtent.y, 0],
          [halfExtent.x, halfExtent.y, 0],
          [halfExtent.x, -halfExtent.y, 0],
          [-halfExtent.x, -halfExtent.y, 0],
          [-halfExtent.x, halfExtent.y, 0],
        ]}
        color={0xfff}
        lineWidth={5}
        toneMapped={false}
      />

      <Text font="./fonts/Slimespooky.woff" fontSize={1} textAlign="center">
        <meshBasicMaterial color={0x000} toneMapped={false} transparent opacity={1} />
        {buttonText}
      </Text>
    </group>
  );
}
