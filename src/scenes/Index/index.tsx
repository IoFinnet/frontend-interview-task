import { JobsQuery, Status, useJobsQuery } from "../../generated/graphql";
import { Card } from "./Card";
import { Column } from "./Column";

import styles from "./styles.module.css";

type Jobs = JobsQuery["jobs"];

export function Index() {
  const { data, loading } = useJobsQuery({ pollInterval: 1000 });

  if (!data && loading) {
    return <div>…</div>;
  }

  if (!data) {
    return <div>Something went wrong :(</div>;
  }

  const groupedColumns: { [status in Status]: Jobs } = {
    DONE: [],
    IN_PROGRESS: [],
    TO_DO: [],
  };
  data.jobs.forEach((job) => groupedColumns[job.status].push(job));

  return (
    <main className={styles.container}>
      <div className={styles.center}>
        {Object.entries(groupedColumns).map(([status, jobs]) => (
          <Column key={status} status={status as Status}>
            {jobs.map((job) => (
              <Card {...job} key={job.id} />
            ))}
          </Column>
        ))}
      </div>
    </main>
  );
}
