import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Loader from "/images/loader.webp";
import Infinity from "./pages/Infinity";
import Landing from "./pages/Landing";
import About from "./pages/About";
import CultNight from "./pages/CultNight";
import Sponsor from "./pages/Sponsor";
import GetinTouch from "./pages/GetinTouch";
import Tech from "./pages/Tech";
import Cult from "./pages/Cult";
import Nexus from "./pages/Nexus";
import Lockout from "./pages/Lockout";
import Anurag from "./pages/Anurag";
import Rofies1 from "./pages/Rofies1";
import Infinityteam from "./components/Infinityteam";
import Infinitypastevent from "./components/Infinitypastevent";
import Bitlegion from "./components/bitlegion";
import InfinityHalloffame from "./components/InfinityHalloffame";
import Cognition from "./pages/Cognition";
import AawazEAawam from "./pages/AawazEAawam";
import FrameFlick from "./pages/FrameFlick";
import Home from "./index";
import NrityaNova from "./pages/NrityaNova";
import LockoutAbout from "./components/LockoutAbout";
import LockoutGuidelines from "./components/LockoutGuidelines";
import ShipWreck from "./pages/ShipWreck";
import StoryQuest from "./pages/StoryQuest";

const App = () => {
  const [showLoader, SetShowLoader] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      SetShowLoader(false);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element:
      
      <> {showLoader && (
        <div className="h-screen fixed w-full z-[999999] overflow-hidden flex items-center justify-center bg-black ">
          <img src={Loader} className="w-[60%]" />
        </div>
      )}
       <Home />
      </>
      ,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/cultnight",
      element: <CultNight />,
    },
    {
      path: "/sponsors",
      element: <Sponsor />,
    },
    {
      path: "/getintouch",
      element: <GetinTouch />,
    },
    {
      path: "/tech",
      element: <Tech />,
    },
    {
      path: "/cult",
      element: <Cult />,
    },
    {
      path: "/nexus",
      element: <Nexus />,
    },
    {
      path: "/infinity",
      element: <Infinity />,
    },
    {
      path: "/infinity/team",
      element: <Infinityteam />,
    },
    {
      path: "/infinity/pastevents",
      element: <Infinitypastevent />,
    },
    {
      path: "/infinity/bitlegion",
      element: <Bitlegion />,
    },
    {
      path: "/infinity/halloffame",
      element: <InfinityHalloffame />,
    },
    {
      path: "/lockout",
      element: <Lockout />,
    },
    {
      path: "/lockout/about",
      element: <LockoutAbout />,
    },
    {
      path: "/lockout/guidelines",
      element: <LockoutGuidelines />,
    },
    {
      path: "/rofies1",
      element: <Rofies1 />,
    },
    {
      path: "/cognition",
      element: <Cognition />,
    },
    {
      path: "/aawazeaawam",
      element: <AawazEAawam />,
    },
    {
      path: "/frameflick",
      element: <FrameFlick />,
    },
    {
      path: "/anurag",
      element: <Anurag />,
    },
    {
      path: "/nrityanova",
      element: <NrityaNova />,
    },
    {
      path: "/shipwreck",
      element: <ShipWreck />,
    },
    {
      path: "/storyquest",
      element: <StoryQuest />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
