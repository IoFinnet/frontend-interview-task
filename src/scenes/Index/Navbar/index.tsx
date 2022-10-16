import styles from "./styles.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
      <header className={styles.title}>Tasks Board</header>
      <hr className={styles.horizontalLine} />
    </nav>
  );
}
