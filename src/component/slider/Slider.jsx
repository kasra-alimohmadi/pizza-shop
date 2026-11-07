import sl from "./slider.module.css";
import Button from "../button/Button.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Slider({ slides = [], content }) {
  return (
    <div className={sl.slider_container}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={sl.slider_img_canteiner}>
              <img
                className={sl.slider_image}
                src={item.image}
                alt={"اسلاید تبلیغاتی"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${sl.slider_content} header-2`}>
        {content?.title || "یک ماجراجویی آشپزی برای تمام حواس"}
      </div>
      <button
        className={`${sl.slider_button} ${Button.size40} ${Button.button} ${Button.primary}`}
      >
        سفارش آنلاین غذا
      </button>
  
    </div>
  );
}
export default Slider;
