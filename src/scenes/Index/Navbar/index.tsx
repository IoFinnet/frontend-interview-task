import styles from "./styles.module.css";

export function Navbar() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Tasks Board</h1>
      <hr className={styles.horizontalLine} />
    </header>
  );
}
