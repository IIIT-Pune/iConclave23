import React from 'react';
import { Text, Image} from '@react-three/drei';

export default function BackgroundText() {
  const fullText = '32';

  return (
    <>
      <Image
        url='./images/cognition_bg.png'
        rotation-x={-Math.PI * 0.5}
        position={[0, 0.02, 17]}
      >
        <meshBasicMaterial color={0x000} toneMapped={false} transparent opacity={1} />
      </Image>
    </>
  );
}
