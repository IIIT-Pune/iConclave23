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

const Cult = () => {
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
