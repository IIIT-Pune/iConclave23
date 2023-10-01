import GNavBar from "../components/GNavBar";
import TestNav from "../components/TestNav";

const FrameFlick = () => {
  return (
    <div>
      <GNavBar
        club="HORIZON"
        color="black"
        hcolor="black"
        className="hidden lg:visible"
      />
      <TestNav className="visible lg:hidden" />
    </div>
  );
};

export default FrameFlick;
