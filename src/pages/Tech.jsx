import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for managing SEO tags

const Tech = () => {
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
        background: "url(/images/tech_2.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="tech-container min-h-screen flex flex-col"
    >
      <Helmet>
        <title>Technical Events - IConclave &#39; 23</title>
        <meta
          name="description"
          content="IIIT Pune,technical events,Infinity,coding contest,CodeChef,ACM-style scoring,problem-solving skills,data structures,Lockout,1v1 coding battles, algorithms,Nexus, 36-hour offline hackathon,healthtech,edtech,web 3.0,blockchain,AI/ML,Off-Road Bandit,robotics challenge,carrier bots,obstacles,checkpoints"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "IIIT Pune,technical events,Infinity,coding contest,CodeChef,ACM-style scoring,problem-solving skills,data structures,Lockout,1v1 coding battles, algorithms,Nexus, 36-hour offline hackathon,healthtech,edtech,web 3.0,blockchain,AI/ML,Off-Road Bandit,robotics challenge,carrier bots,obstacles,checkpoints",
              "url": "https://iconclave.iiitp.ac.in/tech",
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
      <nav className="flex justify-between space-x z-10">
        <a href="/">
          <img
            src="/images/IConclave.png"
            className="p-4 h-24 sm:h-28 md:h-32 lg:h-36"
            alt="Iconclavebg"
          />
        </a>
        <div className="flex items-center">
          <a href="/cult" className="sm:block z-10">
            <h1 className="font-silkroad text-2xl m-0 p-6 text-center text-white font-normal">
              CULTURAL EVENTS
            </h1>
          </a>
        </div>
      </nav>
      <div className="flex-grow lg:-mt-48 mb-4 -mt-8">
        <img
          src="/images/tech_head.png"
          alt="Technical Events"
          className="mx-auto sm:px-4 md:px-20 lg:px-32"
        />
        <div className="-mt-28 lg:-mt-60 px-10 py-24 -mb-32">
          {/* Conditionally render Swiper based on screen size */}
          {window.innerWidth <= 1000 ? ( // Mobile view
            <div
              className="mobile-slides -mb-8"
              style={{ maxHeight: "52vh", overflowY: "auto" }}
            >
              <SwiperSlide className="rounded-3xl">
                <a href="tech/nexus">
                  <img
                    src="./images/nexus_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide className="rounded-3xl">
                <a href="tech/infinity">
                  <img
                    src="./images/infinity_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="tech/offroadbandits">
                  <img
                    src="./images/offrd_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="tech/lockout">
                  <img
                    src="./images/lockout_cau.png"
                    alt=""
                    className="rounded-3xl"
                  />
                </a>
              </SwiperSlide>
            </div>
          ) : (
            // Larger screens (iPad and laptop)
            <div className="desktop-swiper lg:-mb-32">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                className="mySwiper"
                onSwiper={(swiper) => setSwiper(swiper)}
              >
                <SwiperSlide className="rounded-3xl">
                  <a href="tech/nexus">
                    <img
                      src="./images/nexus_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="tech/infinity">
                    <img
                      src="./images/infinity_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="tech/offroadbandits">
                    <img
                      src="./images/offrd_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="rounded-3xl">
                  <a href="tech/lockout">
                    <img
                      src="./images/lockout_cau.png"
                      alt=""
                      className="rounded-3xl"
                    />
                  </a>
                </SwiperSlide>
                {/* Previous Button */}
                <div className="swiper-button-prev" onClick={goPrev}></div>
                {/* Next Button */}
                <div className="swiper-button-next" onClick={goNext}></div>
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <Footer textColor="white" />
    </div>
  );
};

export default Tech;
