import LandingPageNav from "../components/LandingPageNav";
import SponsorCard from "../components/SponsorCard";
import Footer from "../components/Footer";

const SponsorsMobile = () => {
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
      <h1 className="text-white my-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Horrors text-center ">
        Sponsors
      </h1>
      <div className="">
        <div className="flex justify-center">
          <div className="grid p-5 gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            <SponsorCard
              logo="nexussponsor1.png"
              name="Devfolio"
              website="https://devfolio.co"
              partner="Gold Sponsor"
            />
            <SponsorCard
              logo="nexussponsor2.png"
              name="Polygon"
              website="https://polygon.technology"
              partner="Gold Sponsor"
            />
            <SponsorCard
              logo="nexussponsor3.png"
              name="Replit"
              website="https://replit.com/"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="nexussponsor5.png"
              name="Rariko"
              website="https://www.rariko.io/"
              partner="Silver Sponsor"
            />
            <SponsorCard
              logo="nexussponsor4.png"
              name="Pune DAO"
              website="#"
              partner="Community Partner"
            />
            <SponsorCard
              logo="Unstop.png"
              name="Unstop"
              website="https://unstop.com/"
              partner="Event Partner"
            />
            <SponsorCard
              logo="Ed_Times.png"
              name="ED Times"
              website="https://edtimes.in/"
              partner="Online Media Partner"
            />
            <SponsorCard
              logo="India_College_Fest.png"
              name="India College Fest"
              website="https://indiacollegefest.com/"
              partner="Online Media Partner"
            />
            <SponsorCard
              logo="IHONK.png"
              name="It Happens only in Kota"
              website="https://www.ihoik.com/"
              partner="Online Media Partner"
            />
            <SponsorCard
              logo="Campus_Times_Pune.png"
              name="Campus Times Pune"
              website="https://www.campustimespune.com/"
              partner="Youth Partner"
            />
            <SponsorCard
              logo="Plum_Body_Lovin.png"
              name="Plum Body Lovin"
              website="https://plumgoodness.com/"
              partner="Body Product Partner"
            />
            <SponsorCard
              logo="Tarkashastra.png"
              name="Tarkashastra"
              website="https://tarkashastra.co.in/"
              partner="Education Partner"
            />
            <SponsorCard
              logo="TIME_Institute.png"
              name="T.I.M.E"
              website="https://www.time4education.com/"
              partner="Education Partner"
            />
            <SponsorCard
              logo="ALCHERINGAIITG.png"
              name="ALCHERINGA'24 IITG"
              website="https://www.alcheringa.in/"
              partner="Dreaming Partner"
            />
          </div>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default SponsorsMobile;
