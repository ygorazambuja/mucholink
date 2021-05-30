import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.iconButton}>
        <FontAwesomeIcon icon={faSun} size="lg"></FontAwesomeIcon>
      </button>
    </div>
  );
}
