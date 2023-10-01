import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Tech = () => {
  return (
    <div
      style={{
        background: "url(/images/tech_bg.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <h1 className="text-white text-9xl p-14 font-octobercrow tracking-wider">
        Technical Events
      </h1>
      <div className="px-10 py-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper "
        >
          <SwiperSlide className="rounded-3xl">
            <img src="./images/bg_off.png" alt="" className="rounded-3xl bg-black" />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl">
            <img src="./images/lockout_bg.png" alt="" className="rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl">
            <img src="./images/nexus_bg.png" alt="" className="rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl">
            <img
              src="./images/infinity_bg.png"
              alt=""
              className="rounded-3xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tech;
