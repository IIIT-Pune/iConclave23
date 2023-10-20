import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags
import { useState, useEffect } from "react";
import "../App.css";

const preloadedImages = [
  "/images/aawaaz_cau.png",
  "/images/aawazeaawam.png",
  "/images/anuragbg.png",
  "/images/anurag_cau.png",
  "/images/cognition_bg.png",
  "/images/cognition_cau.png",
  "/images/Cultcard1.png",
  "/images/cult_back.png",
  "/images/cult_head.png",
  "/images/footerblack.png",
  "/images/footerwhite.png",
  "/images/frameflick_bg.png",
  "/images/frame_cau.png",
  "/images/ghost.png",
  "/images/Home_bg.png",
  "/images/host2.png",
  "/images/IConclave.png",
  "/images/IConclaveFull.png",
  "/images/loader.gif",
  "/images/loader.webp",
  "/images/loader2.gif",
  "/images/nritya_bg.png",
  "/images/nritya_cau.png",
  "/images/saaz_bg.png",
  "/images/ShipWreck_bg.png",
  "/images/shipwreck_cau.png",
  "/images/story.png",
  "/images/StoryQuest_bg.png",
];

const preloadImages = () => {
  preloadedImages.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};

const preloadedFonts = [
  // "/fonts/1942.ttf",
  // "/fonts/AmericanCaptain.otf",
  // "/fonts/FuzzyBubbles.ttf",
  // "/fonts/Grandstander.ttf",
  // "/fonts/GreycliffCF-Bold_Regular.json",
  // "/fonts/GreycliffCF-ExtraBold.woff",
  // "/fonts/GreycliffCF-ExtraLight.woff",
  // "/fonts/GreycliffCF-Heavy.woff",
  // "/fonts/GreycliffCF-Light.woff",
  // "/fonts/GreycliffCF-Medium.woff",
  // "/fonts/GreycliffCF-Regular.woff",
  // "/fonts/GreycliffCF-Thin.woff",
  // "/fonts/HARRYP.ttf",
  // "/fonts/helvetiker_regular.typeface.json",
  // "/fonts/Horrors.ttf",
  // "/fonts/Horrors.woff",
  // "/fonts/Kodchasan.ttf",
  // "/fonts/liquidism.ttf",
  // "/fonts/MajorMonoDisplay.ttf",
  // "/fonts/miso copy.woff",
  // "/fonts/miso-bold copy.woff",
  // "/fonts/miso-bold.woff",
  // "/fonts/miso-light copy.woff",
  // "/fonts/miso-light.woff",
  // "/fonts/miso.woff",
  // "/fonts/Miso_Regular.json",
  // "/fonts/NewShape-Book.ttf",
  // "/fonts/NewShape.ttf",
  // "/fonts/Nightcore Demo.woff",
  // "/fonts/Nightcore.json",
  // "/fonts/NightcoreDemo.ttf",
  // "/fonts/OctoberCrow.ttf",
  // "/fonts/Punishment.otf",
  // "/fonts/PunkTypewriter.otf",
  // "/fonts/samarkan.TTF",
  // "/fonts/SilkRoad.ttf",
  // "/fonts/Slimespooky.woff",
  // "/fonts/veterantypewriter.ttf",
  // "/fonts/Zombie City PERSONAL USE ONLY!.woff",
];

const preloadFonts = () => {
  preloadedFonts.forEach((fontPath) => {
    const link = document.createElement("link");
    link.href = fontPath;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  });
};

const Cult = () => {
  const [showLoader, SetShowLoader] = useState(true);
  useEffect(() => {
    preloadImages(); // Preload images
    preloadFonts(); //Preload fonts
    const timer = setInterval(() => {
      SetShowLoader(false);
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [showLoader2, SetShowLoader2] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      SetShowLoader2(false);
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        const activeIndex = swiper.activeIndex;
        const nextIndex =
          activeIndex === swiper.slides.length - 1 ? 0 : activeIndex + 1;
        swiper.slideTo(nextIndex);
      }
    }, 4000); // Change slide every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, [swiper]);

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div
      style={{
        background: "url(/images/cult_back.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="tech-container min-h-screen flex flex-col"
    >
      <Helmet>
        <title>Cultural Events - IConclave &#39; 23</title>
        <meta
          name="description"
          content="IIIT Pune,cultural events,Cognition,Quiz Q-riocity,IIIT Pune,Nritya Nova,Vanity Crew,dance ,Rhythm, Prize pool, Aawaz-e-awaam, Abhinay, Street play/theater, iConclave, Shipwreck, Communication,StoryQuest,Story writing,Storytelling,FrameFlicks,Horizon,Photography, Battle of Bands, Music & Art,Cultural Night, Khwaab, Entertainment"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "IIIT Pune,cultural events,Cognition,Quiz Q-riocity,IIIT Pune,Nritya Nova,Vanity Crew,dance ,Rhythm, Prize pool, Aawaz-e-awaam, Abhinay, Street play/theater, iConclave, Shipwreck, Communication,StoryQuest,Story writing,Storytelling,FrameFlicks,Horizon,Photography, Battle of Bands, Music & Art,Cultural Night, Khwaab,Entertainment",
              "url": "https://iconclave.iiitp.ac.in/cult",
              "startDate": "2023-10-12T18:00:00-07:00",
              "endDate": "2023-10-12T22:00:00-07:00",
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
      {/* <h1 className="text-white text-9xl p-14 font-octobercrow tracking-wider">
        Technical Events
      </h1> */}
      <div className="flex justify-between mt-5">
        <a href="/" className="flex items-center">
          <img
            src="/images/IConclave.png"
            className="p-4 h-16 sm:h-20 md:h-24 lg:h-28 invert"
            alt="IconclaveFullbg"
          />
        </a>
        <div className="flex items-center">
          <a href="/tech" className="sm:block z-10">
            <h1 className="font-silkroad text-2xl m-0 p-6 text-center text-[#2E2C2A] font-normal">
              TECHNICAL EVENTS
            </h1>
          </a>
        </div>
      </div>
      <div className="flex-grow lg:-mt-36 mb-4 -mt-8">
        <img
          src="/images/cult_head.png"
          alt="Cultural Events"
          className="mx-auto sm:px-4 md:px-20 lg:px-32"
        />
        <div className="-mt-28 lg:-mt-60 px-10 py-24 -mb-32">
          {/* Conditionally render Swiper based on screen size */}
          {window.innerWidth <= 1000 ? ( // Mobile view
            <div
              className="mobile-slides"
              style={{ maxHeight: "50vh", overflowY: "auto" }}
            >
              <SwiperSlide className="rounded-3xl">
                <a href="cult/nrityanova">
                  <img
                    src="./images/nritya_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/anuraag">
                  <img
                    src="./images/anurag_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/aawazeaawam">
                  <img
                    src="./images/aawaaz_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/frameflick">
                  <img
                    src="./images/frame_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/cognition">
                  <img
                    src="./images/cognition_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/shipwreck">
                  <img
                    src="./images/shipwreck_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="cult/storyquest">
                  <img
                    src="./images/story.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
            </div>
          ) : (
            // Larger screens (iPad and laptop)
            <div className="desktop-swiper lg:-mb-28">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                  type: "bullets",
                }}
                mousewheel={{
                  invert: true,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                className="mySwiper "
                onSwiper={(swiper) => setSwiper(swiper)}
              >
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/nrityanova">
                    <img
                      src="./images/nritya_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/anuraag">
                    <img
                      src="./images/anurag_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/aawazeaawam">
                    <img
                      src="./images/aawaaz_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/frameflick">
                    <img
                      src="./images/frame_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/cognition">
                    <img
                      src="./images/cognition_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/shipwreck">
                    <img
                      src="./images/shipwreck_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="cult/storyquest">
                    <img
                      src="./images/story.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>

                <div className="swiper-pagination"></div>
                {/* Previous Button */}
                <div className="swiper-button-prev " onClick={goPrev}></div>
                {/* Next Button */}
                <div className="swiper-button-next" onClick={goNext}></div>
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default Cult;
