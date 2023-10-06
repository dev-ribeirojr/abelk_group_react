import styles from "../../header.module.css";
import { Link, useLocation } from "react-router-dom";

import { MouseEvent, useContext, useRef } from "react";
import { WidthContext } from "../../../../../contexts/widthContext";

export function NavigationContainer() {
  const { pathname } = useLocation();

  const { valueMenu, setValueMenu } = useContext(WidthContext);
  const containerMenu = useRef<HTMLDivElement | null>(null);

  function handleCloseMenu(e: MouseEvent<HTMLDivElement>) {
    if (e.target === containerMenu.current) {
      setValueMenu(false);
      return;
    }
  }

  return (
    <div
      className={styles.containerMenu}
      style={{
        display: valueMenu ? "block" : "",
      }}
      onClick={(e) => handleCloseMenu(e)}
      ref={containerMenu}
    >
      <nav>
        <Link
          to={"/"}
          onClick={() => setValueMenu(false)}
          className={pathname === "/" ? styles.active : ""}
        >
          SERVIÇOS
        </Link>
        <Link
          to={"/about"}
          onClick={() => setValueMenu(false)}
          className={pathname === "/about" ? styles.active : ""}
        >
          SOBRE
        </Link>
      </nav>
    </div>
  );
}
