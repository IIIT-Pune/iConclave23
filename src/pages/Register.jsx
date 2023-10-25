import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";
import TestTicket from "../components/TestTicket";

const Register = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "url(/images/longpost4.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <div className="flex-grow flex flex-col justify-center">
        <TestTicket />
      </div>

      <Footer textColor={"white"} />
    </div>
  );
};

export default Register;
