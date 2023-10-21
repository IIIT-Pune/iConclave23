import LandingPageNav from "../components/LandingPageNav";
import SponsorCard from "../components/SponsorCard";

const SponsorsMobile = () => {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: "url(/images/longpost2.png)",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <h1 className="text-white text-6xl font-Horrors text-center">Sponsors</h1>
      <div className="m-5">
        <div className="flex flex-col justify-center items-center">
          <SponsorCard
            logo="Unstop.png"
            name="Unstop"
            website="#"
            partner="Event Partner"
          />
          <SponsorCard
            logo="Tech1.png"
            name="Devfolio"
            website="#"
            partner="Technical Partner"
          />
          <SponsorCard
            logo="Tech2.png"
            name="Pune DAO"
            website="#"
            partner="Community Partner"
          />
          <SponsorCard
            logo="Tech3.png"
            name="Rise In"
            website="#"
            partner="Technical Partner"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsMobile;
