import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';
import gsap from 'gsap';
import './button.css'; // Import your CSS file for styling

export default function Button({ buttonText, buttonSize, xPos, zPos, link }) {
  const line = useRef();
  const [hovered, setHovered] = useState(false);
  const halfExtent = { x: buttonSize / 1.4, y: 0.8, z: 0 };

  const onEnter = () => {
    document.body.style.cursor = 'pointer';
    gsap.to(line.current.position, { duration: 0.3, ease: 'back.out(2.5)', z: 0.2 });
  };

  const onLeave = () => {
    document.body.style.cursor = 'default';
    gsap.to(line.current.position, { duration: 0.2, z: 0 });
  };

  const onClick = () => {
    window.location.href = link;
  };
  

  const onPointerDown = () => {
    gsap.to(line.current.scale, { duration: 0.1, x: 0.9, y: 0.9, z: 0.9 });
  };

  const onPointerUp = () => {
    gsap.to(line.current.scale, { duration: 0.1, x: 1, y: 1, z: 1 });
  };

  return (
    <group
      position={[xPos, 0, zPos]}
      rotation-x={-Math.PI * 0.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        visible={false}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <planeGeometry args={[halfExtent.x * 2, halfExtent.y * 2]} />
      </mesh>

      <Line
        ref={line}
        points={[
          [-halfExtent.x, halfExtent.y, 0],
          [halfExtent.x, halfExtent.y, 0],
          [halfExtent.x, -halfExtent.y, 0],
          [-halfExtent.x, -halfExtent.y, 0],
          [-halfExtent.x, halfExtent.y, 0],
        ]}
        color={hovered ? 0x000 : 0xfff} // Change color on hover
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
