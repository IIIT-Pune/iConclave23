/* eslint-disable react/no-unescaped-entities */
import LandingPageNav from "../components/LandingPageNav";

const AboutMobile = () => {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: "url(/images/longpost2.png)",
        backgroundPosition: "left center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <h1 className="text-white text-6xl sm: font-Horrors text-center">
        About
      </h1>
      <div className="text-white font-bold font-miso text-2xl px-5 py-10 flex flex-col gap-6 text-justify">
        <p>
          As the spirit of Halloween descends upon us, we at the Indian
          Institute of Information Technology Pune are filled with eerie
          enthusiasm. With its humble beginnings in 2018, we are back with yet
          another sensational edition of our Marquee event, iConclave ‘23!
        </p>
        <p>
          iConclave ‘23 is the epitome of an inter-college techno-cultural
          extravaganza, proudly hosted by IIIT Pune. The multi-day carnival held
          between the 20th and 22nd of October strives to establish a shared
          forum for tech enthusiasts, creative minds, emerging artists, and
          students from diverse backgrounds for a celebration of knowledge,
          collaboration, and unforgettable entertainment.
        </p>
        <p>
          With 14 exhilarating events, a dazzling cultural night, and an
          assortment of delightful side attractions, this year's iConclave
          promises to be an unparalleled spectacle. Prepare to embark on a
          journey of epic proportions, as we've curated an astounding prize pool
          of 3 lakhs, ensuring that the stakes are higher than ever before! This
          grand occasion beckons you to unleash your inner technophile, partake
          in enriching cross-cultural encounters, and culminate the experience
          with an unforgettable cultural soirée known as 'Khwaab'.
        </p>
      </div>
    </div>
  );
};

export default AboutMobile;
