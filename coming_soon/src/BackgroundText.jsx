import React, { useState, useEffect } from 'react';
import { Text } from '@react-three/drei';

export default function BackgroundText() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true); // State to control cursor visibility
  const fullText = 'coming soon...';
  const typingSpeed = 250; // Adjust typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Use another useEffect to toggle the cursor visibility to create blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Adjust blinking speed here

    return () => {
      clearInterval(cursorTimer);
    };
  }, []);

  // Calculate the cursor's position based on the length of the fullText
  const cursorPosition = [text.length * 0.15, 0.02, 3];

  return (
    <>
      <Text
        font="./fonts/miso.woff"
        fontSize={2.5}
        rotation-x={-Math.PI * 0.5}
        position={[0, 0.02, 3]}
        text={text} // Display the typed text
        textAlign="center"
      >
        <meshBasicMaterial color={[1.25, 1.25, 1.25]} toneMapped={false} transparent opacity={1} />
      </Text>
      {cursorVisible && (
        <Text
          font="./fonts/miso.woff"
          fontSize={2}
          rotation-x={-Math.PI * 0.5}
          position={cursorPosition}
          text={'_'} // Cursor (you can customize this)
          textAlign="right"
        >
          <meshBasicMaterial color={[1.25, 1.25, 1.25]} toneMapped={false} transparent opacity={1} />
        </Text>
      )}
    </>
  );
}
