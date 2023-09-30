import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';

export default function Button({ buttonText, buttonSize , xPos, zPos}) {
  const halfExtent = { x: buttonSize / 1.4, y: 0.8 , z: 0 };
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (buttonRef.current) {
      const distance = buttonRef.current.position.distanceTo(buttonRef.current.getWorldPosition(new THREE.Vector3()));
      if (distance < 2) {
        // If the camera is closer than 2 units to the button, consider it as hovered
        setHovered(true);
      } else {
        setHovered(false);
      }
    }
  });

  return (
    <group position={[ xPos , 0.00, zPos]} rotation-x={-Math.PI * 0.5} onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <mesh visible={false}>
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
