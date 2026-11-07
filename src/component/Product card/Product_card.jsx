import product from "./product_card.module.css";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function Product_card({ products = [] }) {
  return (
    <Swiper
      className={product.product_carousel}
      spaceBetween={24}
      slidesPerView={4.5}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4.3,
        },
      }}
    >
      {products.map((item) => (
        <SwiperSlide className={product.product_slide} key={item.id}>
          <div className={product.product_card}>
            <img
              className={product.product_card_img}
              src={item.image}
              alt={item.title}
            />

            <Link to={`/Branch_full/${item.id}`}>
              <span className={`${product.product_card_title} header-7`}>
                {item.title.toLocaleString("fa-IR")}
              </span>
            </Link>
            <div className={product.product_card_description}>
              {/* علاقه‌مندی */}

              <span className={`${product.product_card_favorite} caption-sm`}>
                <svg className={product.svg_favorite}>
                  <use href="/images/icons/sprite.svg#Heart" />
                </svg>
                افزودن به علاقمندی‌ها
              </span>

              {/* تخفیف */}
              <span className={product.discant}>
                <span className={`${product.product_card_discant} caption-sm`}>
                  {item.product_card_discant.toLocaleString("fa-IR")}
                </span>

                <span className={product.product_card_percent}>
                  %{item.product_card_percent.toLocaleString("fa-IR")}
                </span>
              </span>

              {/* امتیاز */}
              <span className={product.product_card_reit}>
                <svg className={product.svg_star}>
                  <use href="/images/icons/sprite.svg#Star_rate" />
                </svg>

                <span className="button-sm">
                  {item.star.toLocaleString("fa-IR")}
                </span>

                <span className={`${product.rate} caption-sm`}>
                  ({item.product_card_rate.toLocaleString("fa-IR")} امتیاز)
                </span>
              </span>

              {/* قیمت */}
              <span className={`${product.product_card_price} body-md`}>
                {item.price.toLocaleString("fa-IR")} تومان
              </span>

              {/* دکمه */}
              <button className={`${product.product_card_button} button-md`}>
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Product_card;
