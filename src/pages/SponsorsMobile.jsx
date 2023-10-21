import LandingPageNav from "../components/LandingPageNav";
import SponsorCard from "../components/SponsorCard";
import Footer from "../components/Footer";

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
      <h1 className="text-white my-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Horrors text-center ">
        Sponsors
      </h1>
      <div className="">
        <div className="flex justify-center">
          <div className="grid p-5 gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            <SponsorCard
              logo="nexussponsor1.png"
              name="DevFolio"
              website="#"
              partner="Gold Sponsor"
            />
            <SponsorCard
              logo="nexussponsor2.png"
              name="Polygon"
              website="#"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="nexussponsor3.png"
              name="Replit"
              website="#"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="nexussponsor4.png"
              name="Pune DAO"
              website="#"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="nexussponsor5.png"
              name="Rariko"
              website="#"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="Unstop.png"
              name="Unstop"
              website="#"
              partner="Event Partner"
            />
            <SponsorCard
              logo="Ed_Times.png"
              name="ED Times"
              website="#"
              partner="Online Media Partner"
            />
            <SponsorCard
              logo="India_College_Fest.png"
              name="India College Fest"
              website="#"
              partner="Online Media Partner"
            />
            <SponsorCard
              logo="Campus_Times_Pune.png"
              name="Campus Times Pune"
              website="#"
              partner="Youth Partner"
            />
            <SponsorCard
              logo="Plum_Body_Lovin.png"
              name="Plum Body Lovin"
              website="#"
              partner="Body Product Partner"
            />
          </div>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default SponsorsMobile;
