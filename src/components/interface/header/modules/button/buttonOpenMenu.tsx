import { useContext } from "react";
import styles from "../../header.module.css";
import { FiMenu } from "react-icons/fi";
import { WidthContext } from "../../../../../contexts/widthContext";

export function ButtonOpenMenu() {
  const { valueMenu, setValueMenu } = useContext(WidthContext);

  console.log(valueMenu);
  return (
    <button className={styles.menu} onClick={() => setValueMenu(true)}>
      <FiMenu size={25} />
    </button>
  );
}
