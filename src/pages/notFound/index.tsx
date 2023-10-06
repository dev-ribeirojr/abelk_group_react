import styles from "./notFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <section>
        <h1>404</h1>
        <p>Pagina não encontrada</p>
      </section>
      <Link to={"/"}>Ir para página inicial</Link>
    </main>
  );
}
