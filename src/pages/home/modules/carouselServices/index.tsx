import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./carouselServices.module.css";

import { Autoplay } from "swiper/modules";
import { dataCarousel } from "../../../../config/carousel";
import { whats } from "../../../../config/links";

import { BiRightArrowAlt } from "react-icons/bi";
import { useRef } from "react";
export function CarouselServices() {
  const swiperRef = useRef<any>();

  function next() {
    swiperRef.current.slideNext();
  }

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className={styles.carousel}
      >
        {dataCarousel.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.card}>
            <img src={slide.img} alt={`Imagem ${slide.title}`} />
            <div>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href={whats} target="_blank" rel="external">
                Saiba mais!
              </a>
            </div>
          </SwiperSlide>
        ))}
        <button
          onClick={next}
          className={styles.nextSlide}
        >
          <BiRightArrowAlt />
        </button>
      </Swiper>
    </>
  );
}
