import styles from "./header.module.css";

import Logo from "../../../assets/logo.png";

import { NavigationContainer } from "./modules/navigation";
import { ButtonOpenMenu } from "./modules/button/buttonOpenMenu";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <section className="container">
        <Link to={"/"}>
          <img src={Logo} alt="Logo Abelk Capital" height={40} width={170} />
        </Link>
        <ButtonOpenMenu />
        <NavigationContainer />
      </section>
    </header>
  );
}
