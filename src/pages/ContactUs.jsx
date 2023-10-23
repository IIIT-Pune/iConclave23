import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";
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
      
      <Footer textColor={"white"} />
    </div>
  );
};

export default ContactUs;
