import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.scss";
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
          <FontAwesomeIcon
            icon={["fas", "angle-left"]}
            size="lg"
          ></FontAwesomeIcon>
        </button>
      )}
      {!backRoute && <div></div>}

      <button className={styles.iconButton}>
        <FontAwesomeIcon icon={faSun} size="lg"></FontAwesomeIcon>
      </button>
    </div>
  );
}
