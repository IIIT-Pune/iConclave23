import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "/images/loader.gif";
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
import LockoutTeam from "./components/LockoutTeam";
import ShipWreck from "./pages/ShipWreck";
import StoryQuest from "./pages/StoryQuest";

const preloadedImages = [
  '/images/aawaaz_cau.png',
  '/images/aawazeaawam.png',
  '/images/aboutimage.png',
  '/images/Alarm.png',
  '/images/anuragbg.png',
  '/images/anurag_cau.png',
  '/images/bat.ani',
  '/images/bat.apng',
  '/images/bat.gif',
  '/images/bat.png',
  '/images/bg_off.png',
  '/images/Calendar25.png',
  '/images/codecheflogo.svg',
  '/images/coding.png',
  '/images/cognition_bg.png',
  '/images/cognition_cau.png',
  '/images/Cultcard1.png',
  '/images/cult_back.png',
  '/images/cult_head.png',
  '/images/footerblack.png',
  '/images/footerwhite.png',
  '/images/frameflick_bg.png',
  '/images/frame_cau.png',
  '/images/ghost.png',
  '/images/guidelinesimage.png',
  '/images/Home_bg.png',
  '/images/host2.png',
  '/images/IConclave.png',
  '/images/IConclaveFull.png',
  '/images/infinity_bg.png',
  '/images/infinity_cau.png',
  '/images/Infinity_logo.png',
  '/images/loader.gif',
  '/images/loader.webp',
  '/images/loader2.gif',
  '/images/lockoutbg.png',
  '/images/lockout_bg.png',
  '/images/lockout_cau.png',
  '/images/lockout_logo.png',
  '/images/logo.png',
  '/images/logo.svg',
  '/images/nexus_bg.png',
  '/images/nexus_cau.png',
  '/images/nritya_bg.png',
  '/images/nritya_cau.png',
  '/images/off-roadbgblur.png',
  '/images/off-roadbigbgblur.png',
  '/images/offrd_cau.png',
  '/images/saaz_bg.png',
  '/images/scrolldown..gif',
  '/images/ShipWreck_bg.png',
  '/images/shipwreck_cau.png',
  '/images/story.png',
  '/images/StoryQuest_bg.png',
  '/images/tech_2.png',
  '/images/tech_bg.png',
  '/images/tech_head.png'
];

const preloadImages = () => {
  preloadedImages.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};
const preloadedFonts = [
  '/fonts/1942.ttf',
  '/fonts/AmericanCaptain.otf',
  '/fonts/FuzzyBubbles.ttf',
  '/fonts/Grandstander.ttf',
  '/fonts/GreycliffCF-Bold_Regular.json',
  '/fonts/GreycliffCF-ExtraBold.woff',
  '/fonts/GreycliffCF-ExtraLight.woff',
  '/fonts/GreycliffCF-Heavy.woff',
  '/fonts/GreycliffCF-Light.woff',
  '/fonts/GreycliffCF-Medium.woff',
  '/fonts/GreycliffCF-Regular.woff',
  '/fonts/GreycliffCF-Thin.woff',
  '/fonts/HARRYP.ttf',
  '/fonts/helvetiker_regular.typeface.json',
  '/fonts/Horrors.ttf',
  '/fonts/Horrors.woff',
  '/fonts/Kodchasan.ttf',
  '/fonts/liquidism.ttf',
  '/fonts/MajorMonoDisplay.ttf',
  '/fonts/miso copy.woff',
  '/fonts/miso-bold copy.woff',
  '/fonts/miso-bold.woff',
  '/fonts/miso-light copy.woff',
  '/fonts/miso-light.woff',
  '/fonts/miso.woff',
  '/fonts/Miso_Regular.json',
  '/fonts/NewShape-Book.ttf',
  '/fonts/NewShape.ttf',
  '/fonts/Nightcore Demo.woff',
  '/fonts/Nightcore.json',
  '/fonts/NightcoreDemo.ttf',
  '/fonts/OctoberCrow.ttf',
  '/fonts/Punishment.otf',
  '/fonts/PunkTypewriter.otf',
  '/fonts/samarkan.TTF',
  '/fonts/SilkRoad.ttf',
  '/fonts/Slimespooky.woff',
  '/fonts/veterantypewriter.ttf',
  '/fonts/Zombie City PERSONAL USE ONLY!.woff',
];

const preloadFonts = () => {
  preloadedFonts.forEach((fontPath) => {
    const link = document.createElement('link');
    link.href = fontPath;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
};

const App = () => {
  const [showLoader, SetShowLoader] = useState(true);
  useEffect(() => {
    preloadImages(); // Preload images
    preloadFonts();//Preload fonts
    const timer = setInterval(() => {
      SetShowLoader(false);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          {showLoader && (
            <div className="h-screen fixed w-full z-[999999] overflow-hidden flex items-center justify-center bg-black ">
              <img src={Loader} className="w-[60%]" />
            </div>
          )}
          <Home />
        </>
      ),
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "cultnight",
      element: <CultNight />,
    },
    {
      path: "sponsors",
      element: <Sponsor />,
    },
    // {
    //   path: "getintouch",
    //   ,
    // },
    {
      path: "tech",
      element: <Tech />,
    },
    {
      path: "cult",
      element: <Cult />,
    },
    {
      path: "nexus",
      element: <Nexus />,
    },
    {
      path: "infinity",
      element: <Infinity />,
    },
    {
      path: "infinity/team",
      element: <Infinityteam />,
    },
    {
      path: "infinity/pastevents",
      element: <Infinitypastevent />,
    },
    {
      path: "infinity/bitlegion",
      element: <Bitlegion />,
    },
    {
      path: "infinity/halloffame",
      element: <InfinityHalloffame />,
    },
    {
      path: "lockout",
      element: <Lockout />,
    },
    {
      path: "lockout/about",
      element: <LockoutAbout />,
    },
    {
      path: "lockout/guidelines",
      element: <LockoutGuidelines />,
    },
    {
      path: "/lockout/team",
      element: <LockoutTeam />,
    },
    {
      path: "rofies1",
      element: <Rofies1 />,
    },
    {
      path: "cognition",
      element: <Cognition />,
    },
    {
      path: "aawazeaawam",
      element: <AawazEAawam />,
    },
    {
      path: "frameflick",
      element: <FrameFlick />,
    },
    {
      path: "anurag",
      element: <Anurag />,
    },
    {
      path: "nrityanova",
      element: <NrityaNova />,
    },
    {
      path: "shipwreck",
      element: <ShipWreck />,
    },
    {
      path: "storyquest",
      element: <StoryQuest />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
