import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";
import Card from "../components/CoreTeamCards";
import { CoreMember } from "../assets/coremember";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "url(/images/longpost4.png), lightgray 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <div className="flex-grow flex flex-col justify-center gap-8 mt-8">
        {/* font-youmurdererbb */}
        <h1 className="text-gray-300 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Horrors uppercase text-center">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row items-center text-white justify-center font-miso my-4 md:my-6 lg:my-8">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-4">
            Mail us at
          </h1>
          <a
            href="mailto:iConclave@iiitp.ac.in"
            className="flex gap-4 justify-center items-center px-4"
          >
            <BiLogoGmail className="text-3xl sm:text-5xl lg:text-7xl" />
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              iConclave@iiitp.ac.in
            </p>
          </a>
        </div>

        <div className="flex flex-col text-white justify-center">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-miso">
            Follow us on
          </h1>
          <div className="flex justify-evenly p-4 sm:p-8">
            <a
              href="https://twitter.com/iconclave_iiitp"
              target="_blank"
              id="twitter"
              className="flex flex-col justify-center gap-2 font-miso items-center"
            >
              <FaXTwitter className="text-3xl sm:text-5xl lg:text-7xl" />
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                iconclave_iiitp
              </p>
            </a>
            <a
              href="https://www.instagram.com/iconclave_iiitp/"
              target="_blank"
              id="instagram"
              className="flex flex-col justify-center gap-2 font-miso items-center"
            >
              <FaInstagram className="text-3xl sm:text-5xl md:text-7xl" />
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                iconclave_iiitp
              </p>
            </a>
            {/* <a
              target="_blank"
              id="linkedin"
              className="flex flex-col justify-center gap-2 font-miso items-center"
            >
              <FaLinkedinIn className="text-3xl sm:text-5xl lg:text-7xl" />
              <p className="text-3xl hidden sm:block">iconclave_iiitp</p>
            </a> */}
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-14 py-10 lg:py-16">
            {CoreMember.map((member) => (
              <Card
                key={member.name}
                name={member.name.toUpperCase()}
                designation={member.designation.toUpperCase()}
                X={member.github}
                linkedin={member.linkedin}
                insta={member.insta}
              />
            ))}
          </div>
        </div> */}
      </div>

      <Footer textColor={"white"} />
    </div>
  );
};

export default ContactUs;
