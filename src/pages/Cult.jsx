import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { useState, useEffect } from "react";
import '../App.css'
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
        background: "url(/images/cult_back.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="tech-container h-screen"
    >
      {/* <h1 className="text-white text-9xl p-14 font-octobercrow tracking-wider">
        Technical Events
      </h1> */}
      <img src="/images/cult_head.png" alt="Technical Events" className="mx-auto px-20" />
      <div className="-mt-52 px-10 py-24">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={{   // Enable navigation
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide className="rounded-3xl">
            <a href="/frameflick">
              <img src="./images/frame_cau.png" alt="" className="rounded-3xl" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl">
            <a href="/cognition">
              <img src="./images/cognition_cau.png" alt="" className="rounded-3xl" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl">
            <a href="/aawazeaawam">
              <img src="./images/aawaaz_cau.png" alt="" className="rounded-3xl" />
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
    </div>
  );
};

export default Cult;
