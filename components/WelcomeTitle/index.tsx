import styles from "./WelcomeTitle.module.scss";

export default function WelcomeTitle() {
  return (
    <div className={styles.container}>
      <span className={styles.topTitle}>Welcome to</span>

      <span className={styles.title}>Mucho Link</span>
      <span className={styles.subTitle}>
        guardaremos y compartiremos sus enlaces
      </span>
    </div>
  );
}
