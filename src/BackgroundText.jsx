import React from 'react';
import { Text } from '@react-three/drei';

export default function BackgroundText() {
  const fullText = '26-28 OCT 2023';

  return (
    <>
      <Text
        font="./fonts/miso.woff"
        fontSize={2.5}
        rotation-x={-Math.PI * 0.5}
        position={[0, 0.02, ]}
        text={fullText} // Display the static text
        textAlign="center"
      >
        <meshBasicMaterial color={0x000} toneMapped={false} transparent opacity={1} />
      </Text>
    </>
  );
}
