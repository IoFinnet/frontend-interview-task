import { useEffect } from "react";
import { Status, useJobsQuery } from "../../generated/graphql";
import { Card } from "./Card";
import { Column } from "./Column";
import { Navbar } from "./Navbar";

import styles from "./styles.module.css";

export function Index() {
  const { data, loading } = useJobsQuery({ pollInterval: 10 });

  if (!data && loading) {
    return <div>…</div>;
  }

  if (!data) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <div className={styles.outerContainer}>
      <Navbar />
      <div className={styles.container}>
        <Column>
          <header className={`${styles.header} ${styles.todo}`}>
            <h2 className={styles.headerText}>To Do</h2>
          </header>
          {data.jobs
            .filter((it) => it.status === Status.ToDo)
            .map((it) => (
              <Card {...it} key={it.id} />
            ))}
        </Column>
        <Column>
          <header className={`${styles.header} ${styles.inProgress}`}>
            <h2 className={styles.headerText}>In Progress</h2>
          </header>
          {data.jobs
            .filter((it) => it.status === Status.InProgress)
            .map((it) => (
              <Card {...it} key={it.id} />
            ))}
        </Column>
        <Column>
          <header className={`${styles.header} ${styles.done}`}>
            <h2 className={styles.headerText}>Done</h2>
          </header>
          {data.jobs
            .filter((it) => it.status === Status.Done)
            .map((it) => (
              <Card {...it} key={it.id} />
            ))}
        </Column>
      </div>
    </div>
  );
}
