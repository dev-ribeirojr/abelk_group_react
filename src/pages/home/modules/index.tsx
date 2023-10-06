"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./carousel.module.css";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { BiRightArrowAlt } from "react-icons/bi";
import { useRef } from "react";
import { dataCarousel } from "../../../config/carousel";
import { whats } from "../../../config/links";

export function Carousel() {
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
        className={styles.carousel}
      >
        {dataCarousel.map((slide: any) => (
          <SwiperSlide key={slide.id} className={styles.card}>
            <img
              src={slide.img}
              alt={`Imagem ${slide.title}`}
              className={styles.img}
            />
            <div className={styles.info}>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href={whats} target="_blank" rel="external">
                Saiba mais!
              </a>
            </div>
          </SwiperSlide>
        ))}
        <section className={styles.nextSlide}>
          <button onClick={next}>
            <BiRightArrowAlt />
          </button>
        </section>
      </Swiper>
    </>
  );
}
