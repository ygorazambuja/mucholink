import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import { useRouter } from "next/router";

interface HeaderProps {
  backRoute?: boolean;
}

export default function Header({ backRoute }: HeaderProps) {
  const router = useRouter();
  const goTo = () => router.back();

  return (
    <div className={styles.header}>
      {backRoute && (
        <button onClick={goTo} className={styles.iconButton}>
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </button>
      )}
      {!backRoute && <div></div>}

      <button className={styles.iconButton}>
        <FontAwesomeIcon icon={faSun} size="lg" />
      </button>
    </div>
  );
}
