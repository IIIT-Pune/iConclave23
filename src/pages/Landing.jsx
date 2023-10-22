import LandingPageNav from "../components/LandingPageNav";

const preloadedImages = ["/images/longpost.png", "/images/IClogo.png"];

const preloadImages = () => {
  preloadedImages.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};

const preloadedFonts = [
  "/fonts/Horrors.ttf",
  "/fonts/Horrors.woff",
  "/fonts/miso copy.woff",
  "/fonts/miso-bold copy.woff",
  "/fonts/miso-bold.woff",
  "/fonts/miso-light copy.woff",
  "/fonts/miso-light.woff",
  "/fonts/miso.woff",
  "/fonts/Miso_Regular.json",
];

const preloadFonts = () => {
  preloadedFonts.forEach((fontPath) => {
    const link = document.createElement("link");
    link.href = fontPath;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  });
};

const Landing = () => {
  return (
    <div
      style={{
        background: "url(/images/longpost.png)",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex flex-col"
    >
      <LandingPageNav />
      <div className="flex flex-col flex-grow  justify-center items-center pb-8">
        <div className="flex flex-col justify-center items-center mb-56 gap-4 sm:gap-0">
          <img src="./images/IClogo.png" alt="Logo" className="w-72 sm:w-128" />
          <div className="text-white font-miso flex flex-col sm:flex-row gap-4 sm:gap-8 text-4xl md:text-6xl">
            <div className="border-2 bg-black border-white px-4 py-2 text-center rounded-2xl">
              <a href="/tech">Technical Events</a>
            </div>
            <div className="border-2 bg-black border-white px-4 py-2 text-center rounded-2xl">
              <a href="/cult">Cultural Events</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-5xl text-center sm:text-7xl py-8 md:py-2 uppercase font-Horrors">
          26-28 October
        </p>
        <h4 className="text-white text-4xl text-center font-miso py-4 uppercase hidden sm:block">
          Indian Institute of Information Technology Pune
        </h4>
      </div>
    </div>
  );
};

export default Landing;
