import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import '../App.css'

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
    }, 1500); // Change slide every 1.5 seconds

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
      className="tech-container min-h-screen"
    >
      {/* <h1 className="text-white text-9xl p-14 font-octobercrow tracking-wider">
        Technical Events
      </h1> */}
      <img src="/images/tech_head.png" alt="Technical Events" className="mx-auto sm:px-4 md:px-20 lg:px-20" />
      <div className="-mt-28 lg:-mt-44 px-10 py-24">
        {/* Conditionally render Swiper based on screen size */}
        {window.innerWidth <= 768 ? ( // Mobile view
          <div className="mobile-slides" style={{ maxHeight: "75vh", overflowY: "auto" }}>
            <SwiperSlide className="rounded-3xl">
              <a href="/nexus">
                <img src="./images/nexus_cau.png" alt="" className="rounded-3xl" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
              <a href="/infinity">
                <img src="./images/infinity_cau.png" alt="" className="rounded-3xl" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
              <a href="/rofies1">
                <img src="./images/offrd_cau.png" alt="" className="rounded-3xl" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
              <a href="/lockout">
                <img src="./images/lockout_cau.png" alt="" className="rounded-3xl" />
              </a>
            </SwiperSlide>
          </div>
        ) : ( // Larger screens (iPad and laptop)
          <div className="desktop-swiper">
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
                <a href="/nexus">
                  <img src="./images/nexus_cau.png" alt="" className="rounded-3xl" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="/infinity">
                  <img src="./images/infinity_cau.png" alt="" className="rounded-3xl" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="/rofies1">
                  <img src="./images/offrd_cau.png" alt="" className="rounded-3xl" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="rounded-3xl">
                <a href="/lockout">
                  <img src="./images/lockout_cau.png" alt="" className="rounded-3xl" />
                </a>
              </SwiperSlide>
            </Swiper>
            {/* Previous Button */}
            <div className="swiper-button-prev" onClick={goPrev}></div>
            {/* Next Button */}
            <div className="swiper-button-next" onClick={goNext}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tech;