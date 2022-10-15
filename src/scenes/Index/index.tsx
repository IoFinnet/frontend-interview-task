import { useEffect } from "react";
import { Status, useJobsQuery } from "../../generated/graphql";
import { Card } from "./Card";
import { Column } from "./Column";
import { Navbar } from "./Navbar";

import styles from "./styles.module.css";

export function Index() {
  const { data, loading } = useJobsQuery({ pollInterval: 10 });

  if (!data && loading) {
    return <div>Loading…</div>;
  }

  if (!data) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <div className={styles.outerContainer}>
      <Navbar />
      <div className={styles.container}>
        <Column jobs={data.jobs} filterStatus={Status.ToDo} title={"TO DO"}/>
        <Column jobs={data.jobs} filterStatus={Status.InProgress} title={"IN PROGRESS"}/>
        <Column jobs={data.jobs} filterStatus={Status.Done} title={"DONE"}/>
      </div>
    </div>
  );
}
