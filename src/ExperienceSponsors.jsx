import  { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {  Physics } from "@react-three/rapier";
import { useControls } from "leva"; // Import useControls
import { useThree } from "@react-three/fiber";
import Floor from "./Floor.jsx";
import MainText from "./MainText.jsx";
import BackgroundText from "./BackgroundText.jsx";
import Effects from "./Effects.jsx";
import Fog from "./Fog.jsx";
// import Logo from './Logo.jsx';
import Boundings from "./Boundings.jsx";
import Cylinder from "./Cylinder.jsx";
// import BackgroundTextAbout from "./BackgroundTextAbout.jsx"


export default function Experience() {
  const { controls, gl, camera } = useThree();

  useEffect(() => {
    if (controls) {
      controls.target.x = 1;
      controls.target.z = 3;
    }
  }, [controls]);

  const options = useControls({
    debug: { value: false },
    // Add a camera perspective control
    cameraPerspective: {
      value: "default",
      options: ["default", "top", "side"],
    },
  });

  // Function to change camera perspective
  const changeCameraPerspective = (perspective) => {
    switch (perspective) {
      case "top":
        camera.position.set(0, 800, 30000); // Set top view camera position
        camera.lookAt(0, 0, 0);
        break;
      case "side":
        camera.position.set(10, 0, 0); // Set side view camera position
        camera.lookAt(0, 0, 0);
        break;
      default:
        camera.position.set(0, 20, 50); // Set default camera position
        camera.lookAt(0, 0, 0);
    }
  };

  // Watch for changes in camera perspective option and update the camera accordingly
  useEffect(() => {
    changeCameraPerspective(options.cameraPerspective);
  }, [options.cameraPerspective]);

  return (
    <>
      {options.debug && <Perf position="top-left" />}

      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI * 0.49}
        enablePan={false}
        minDistance={1}
        maxDistance={30}
      />

      <Effects />

      {/* Fog */}
      <Fog />

      <Physics gravity={[0, -9.08, 0]}>
        {/* Debug */}
        {/* <Debug /> */}

        {/* Floor */}

        <Floor />

        {/* Main Text */}
        <MainText />

        {/* Background Text */}
        <BackgroundText y={0.02} text={'SPONSORS'}/>

        {/* Buttons */}

        {/* <>
          <Button
            buttonText=""
            buttonSize={15}
            xPos={0}
            zPos={12}
            link="/tech"
          />
        </> */}
 

        {/* Logo */}
        {/* <Logo /> */}

        {/* Cylinders */}
        <Cylinder
          name="cylinder1"
          color="#ff5959"
          radius={0}
          position={[-12, 5]}
          intensity={4.5}
        />
        <Cylinder
          name="cylinder2"
          color="#3f85fc"
          radius={0}
          position={[12, 5]}
          intensity={4.5}
        />
        <Cylinder
          name="cylinder3"
          color="#3f85fc"
          radius={0}
          position={[12, 5]}
          intensity={4.5}
        />

        {/* Boundings */}
        <Boundings width={30} height={10} depth={30} position={[0, 0, -5]} />
      </Physics>
    </>
  );
}
