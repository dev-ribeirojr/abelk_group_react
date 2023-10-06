import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./page.module.css";

import Mobile from "../../assets/mobile.png";
import { Carousel } from "./modules/carousel";
import { CarouselServices } from "./modules/carouselServices";
import { FormSendEmail } from "./modules/form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <section className={styles.carouseServices}>
        <h2>
          <span>NOSSOS SERVIÇOS</span> PARA SEU DIA A DIA
        </h2>
        <CarouselServices />
      </section>
      <section
        style={{
          background: "#cc0001",
        }}
      >
        <section className={styles.areaForm}>
          <section className={styles.form}>
            <h2>Entre em contato conosco, queremos ouvir você!</h2>
            <FormSendEmail />
          </section>
          <section className={styles.areaImg}>
            <img src={Mobile} alt="imagem mobíle" />
          </section>
        </section>
      </section>
    </main>
  );
}
