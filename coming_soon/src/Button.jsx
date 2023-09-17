import { Line, Text } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Button() {
  const line = useRef();
  const halfExtent = { x: 6.5, y: 0.8, z: 0 };

  // const onEnter = () => {
  //   document.body.style.cursor = 'pointer';
  //   gsap.to(line.current.position, { duration: 0.3, ease: 'back.out(2.5)', z: 0.2 });
  // };

  const onLeave = () => {
    document.body.style.cursor = 'default';
    gsap.to(line.current.position, { duration: 0.2, z: 0 });
  };

  // Define the target date
  const targetDate = new Date("Oct 20, 2023 00:00:00").getTime();

  // Initialize the remaining time state
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  // Function to calculate remaining time
  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Set up an interval to update the remaining time every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <group position={[0, 0.01, 5.5]} rotation-x={-Math.PI * 0.5}>
      <mesh visible={false} >
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
        color={[1.25, 1.25, 1.25]}
        lineWidth={5}
        toneMapped={false}
      />

      <Text font="./fonts/GreycliffCF-Heavy.woff" fontSize={1} textAlign="center">
        <meshBasicMaterial color={[1.25, 1.25, 1.25]} toneMapped={false} transparent opacity={1} />
        {remainingTime.days} days {remainingTime.hours} hrs {remainingTime.minutes} min {remainingTime.seconds} sec
      </Text>
    </group>
  );
}
