import { Job } from "../../../generated/graphql";
import { Card } from "../Card";

import styles from "./styles.module.css";

type Props = {
  jobs: Job[];
  title: string;
};

export function Column({ jobs, title }: Props) {
  return (
    <section className={styles.container}>
      <header
        className={`
        ${styles.header} 
        ${
          title === "TO DO"
            ? styles.todo
            : title === "IN PROGRESS"
            ? styles.inProgress
            : styles.done
        }`}
      >
        <h2 className={styles.headerText}>{title}</h2>
      </header>
      {jobs.map((it) => (
        <Card {...it} key={it.id} />
      ))}
    </section>
  );
}
