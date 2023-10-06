import { about } from "../../config/about";
import styles from "./about.module.css";

import Hero from "../../assets/hero.png";
export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <section className={styles.text}>
          <h1>Sobre</h1>
          <p dangerouslySetInnerHTML={{ __html: about.about }} />
        </section>
        <img src={Hero} alt="foto representante" />
      </section>
      <section className={styles.gridText}>
        <section className={styles.text}>
          <h2>Missão</h2>
          <p>{about.mission}</p>
        </section>
        <section className={styles.text}>
          <h2>Visão</h2>
          <p>{about.mission}</p>
        </section>
      </section>
      <section className={styles.containerValues}>
        <h2>Valores</h2>
        <section className={styles.values}>
          {about.values.map((value) => (
            <section key={value.id} className={styles.value}>
              <p className={styles.id}>{value.id}</p>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}
