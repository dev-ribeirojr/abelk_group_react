import styles from "./footer.module.css";
import {
  FaInstagram,
  // FaYoutube,
  FaWhatsapp,
  // FaFacebookF,
} from "react-icons/fa";

import Logo from "../../../assets/logo.png";
import { whats } from "../../../config/links";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <a
          href="https://www.instagram.com/abelkgroup/"
          target="_blank"
          rel="external"
        >
          <span>
            <FaInstagram />
          </span>
        </a>
        {/* <a href="#" target="_blank" rel="external">
          <span>
            <FaYoutube />
          </span>
        </a> */}
        <a href={whats} target="_blank" rel="external">
          <span>
            <FaWhatsapp />
          </span>
        </a>
        {/* <a href="#" target="_blank" rel="external">
          <span>
            <FaFacebookF />
          </span>
        </a> */}
      </section>
      <section className={styles.info}>
        <p>R. Brasília, 272 - Carlos Prates - Belo Horizonte - MG, 30710-270</p>
        <Link to="/">
          <img src={Logo} alt="Logo Abelk Capital" width={170} height={40} />
        </Link>
      </section>
    </footer>
  );
}
