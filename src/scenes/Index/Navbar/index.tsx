import styles from "./styles.module.css";

export function Navbar() {
  return (
    <header className={styles.container}>
      <title className={styles.title}>Tasks Board</title>
      <hr className={styles.horizontalLine} />
    </header>
  );
}
