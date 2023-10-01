import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Cult = () => {
  return (
    <div>
      <div
        style={{
          background: "url(/images/tech_bg.png)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        className="h-screen"
      >
        <h1 className="text-white text-9xl p-14 font-octobercrow tracking-wider">
          Cultural Events
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
              <img
                src="./images/Cultcard1.png"
                alt=""
                className="rounded-3xl bg-black"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cult;
