import LockoutNav from "../components/LockoutNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import RegisterButton from "../components/RegsiterButton";

const Lockout = () => {
  return (
    <div
      style={{
        background: "url(/images/lockout_bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-full overflow-y-auto flex flex-col"
    >
      <Helmet>
        <title>Lockout - Coding Competition</title>
        <meta
          name="description"
          content="In a 1v1 time bounded elimination rounds of coding competition demonstrating problem-solving skills, algorithms, and data structures knowledge to earn points in this test of skill, coding challenges, and speed. Optimize the code, analyze time complexity, and work efficiently within tight time constraints."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Lockout - Coding Competition",
              "description": "In a 1v1 time bounded elimination rounds of coding competition demonstrating problem-solving skills, algorithms, and data structures knowledge to earn points in this test of skill, coding challenges, and speed. Optimize the code, analyze time complexity, and work efficiently within tight time constraints.",
              "startDate": "2023-11-01T00:00:00Z",
              "endDate": "2023-11-02T23:59:59Z",
              "location": {
                "@type": "Place",
                "name": "IIIT Pune",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Main Street",
                    "addressLocality": "Pune",
                    "addressRegion": " Maharashtra",
                    "postalCode": "4110441",
                    "addressCountry": "India"
                  }
                },
                "performer": {
                  "@type": "Organization",
                  "name": "IConclave - IIIT Pune"
                }
              }
            `}
        </script>
      </Helmet>

      <LockoutNav />
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* <div className="flex flex-col"> */}
        <div className="flex justify-center">
          <img
            src="/images/lockout_logo.png"
            alt="lockoutlogo"
            className="w-192 p-10"
          />
        </div>
        <div className="flex justify-center items-center ">
          <RegisterButton link="https://forms.gle/r8W9gevCxfWUGrn47" />
        </div>
      </div>

      <Footer
        textColor={"white"}
        // socialMediaLinks={{
        //   mail: "mailto:bitlegion@iiitp.ac.in",
        //   instagram: "https://www.instagram.com/bit.iiitp/",
        //   linkedin: "https://www.linkedin.com/company/bitlegion/",
        //   twitter: "https://twitter.com/bit_iiitp",
        // }}
      />
    </div>
  );
};

export default Lockout;
