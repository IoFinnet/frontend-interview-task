import { Job, Status } from "../../../generated/graphql";
import { Card } from "../Card";

import styles from "./styles.module.css";

type Props = {
  jobs: Job[];
  filterStatus: Status;
  title: string;
};

export function Column({ jobs, filterStatus, title }: Props) {
  return (
    <section className={styles.container}>
      <header
        className={`
        ${styles.header} 
        ${
          filterStatus === "TO_DO"
            ? styles.todo
            : filterStatus === "IN_PROGRESS"
            ? styles.inProgress
            : styles.done
        }`}
      >
        <h2 className={styles.headerText}>{title}</h2>
      </header>
      {jobs
        .filter((it) => it.status === filterStatus)
        .map((it) => (
          <Card {...it} key={it.id} />
        ))}
    </section>
  );
}
