import React from 'react';
import { Text } from '@react-three/drei';

export default function BackgroundText({text , zpos , fontName, size} ) {
  const fullText = text;
  const fname = fontName;

  return (
    <>
      <Text
        font= {fname}
        fontSize={size}
        rotation-x={-Math.PI * 0.5}
        position={[0, 0.02, zpos]}
        text={fullText} // Display the static text
        textAlign="center"
      >
        <meshBasicMaterial color={0x000} toneMapped={false} transparent opacity={1} />
      </Text>
    </>
  );
}
