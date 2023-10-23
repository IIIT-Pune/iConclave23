import CommingSoon from "../components/CommingSoon";
import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";

const CultNight = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-no-repeat"
      style={{
        background: "url(/images/longpost4.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <div className="flex-grow flex-col flex justify-center">
        <CommingSoon />
      </div>
      <Footer textColor="white" />
    </div>
  );
};

export default CultNight;
