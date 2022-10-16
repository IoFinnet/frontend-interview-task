import { Status, useJobsQuery } from "../../generated/graphql";
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

  const jobsData = [
    {
      jobs: data.jobs.filter((it) => it.status === Status.ToDo),
      title: "TO DO",
    },
    {
      jobs: data.jobs.filter((it) => it.status === Status.InProgress),
      title: "IN PROGRESS",
    },
    {
      jobs: data.jobs.filter((it) => it.status === Status.Done),
      title: "DONE",
    },
  ];

  return (
    <div className={styles.outerContainer}>
      <Navbar />
      <main className={styles.container}>
        {jobsData.map((item) => (
          <Column key={item.title} jobs={item.jobs} title={item.title} />
        ))}
      </main>
    </div>
  );
}
