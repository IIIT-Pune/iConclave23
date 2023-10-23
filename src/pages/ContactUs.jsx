import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";
import Card from "../components/CoreTeamCards";
import { CoreMember } from "../assets/coremember";

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
      <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-youmurdererbb text-center">
        Contact Us
      </h1>

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

      <Footer textColor={"white"} />
    </div>
  );
};

export default ContactUs;
