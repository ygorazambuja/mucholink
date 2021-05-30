import { useRouter } from "next/router";
import styles from "../Buttons.module.scss";

export default function HomeDoubleButton() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.registerButton}
        onClick={() => router.push("/register")}
      >
        Register
      </button>
      <button
        className={styles.loginButton}
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
  );
}
