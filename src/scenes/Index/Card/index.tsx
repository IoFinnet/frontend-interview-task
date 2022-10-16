import { DateTime } from "luxon";

import { JobsQuery } from "../../../generated/graphql";

import styles from "./styles.module.css";

type Props = Omit<JobsQuery["jobs"][number], "__typename">;

export function Card({ status, createdAt, name }: Props) {
  return (
    <article className={styles.container}>
      <h1 className={styles.title} title={name}>
        <div className={styles.titleContainer}>{name}</div>
      </h1>
      <div className={styles.subtitle}>
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(DateTime.fromISO(createdAt).toJSDate())}
      </div>
      <div
        className={`
          ${styles.status} 
          ${
            status === "TO_DO"
              ? styles.toDo
              : status === "IN_PROGRESS"
              ? styles.inProgress
              : styles.done
          }`}
      >
        {status}
      </div>
    </article>
  );
}
