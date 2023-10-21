/* eslint-disable react/no-unescaped-entities */
import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";

const AboutMobile = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "url(/images/longpost22.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <div className="flex-grow flex flex-col justify-center gap-2 mt-12 sm:mt-8">
        {/* lg:text-left lg:pl-20 */}
        <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Horrors text-center ">
          About
        </h1>
        <div className="text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            As the spirit of Halloween descends upon us, we at the Indian
            Institute of Information Technology Pune are filled with eerie
            enthusiasm. With its humble beginnings in 2018, we are back with yet
            another sensational edition of our Marquee event, iConclave ‘23!
          </p>
          <p>
            iConclave ‘23 is the epitome of an inter-college techno-cultural
            extravaganza, proudly hosted by IIIT Pune. The multi-day carnival
            held between the 20th and 22nd of October strives to establish a
            shared forum for tech enthusiasts, creative minds, emerging artists,
            and students from diverse backgrounds for a celebration of
            knowledge, collaboration, and unforgettable entertainment.
          </p>
          <p>
            With 14 exhilarating events, a dazzling cultural night, and an
            assortment of delightful side attractions, this year's iConclave
            promises to be an unparalleled spectacle. Prepare to embark on a
            journey of epic proportions, as we've curated an astounding prize
            pool of 3 lakhs, ensuring that the stakes are higher than ever
            before! This grand occasion beckons you to unleash your inner
            technophile, partake in enriching cross-cultural encounters, and
            culminate the experience with an unforgettable cultural soirée known
            as 'Khwaab'.
          </p>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default AboutMobile;
