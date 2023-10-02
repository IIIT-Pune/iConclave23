import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Infinity from "./pages/Infinity";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Events from "./pages/Events";
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
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/events",
      element: <Events />,
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
  ]);
  return (
      <RouterProvider router={router} />
  );
};

export default App;
