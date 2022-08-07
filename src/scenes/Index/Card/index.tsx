import { DateTime } from "luxon";

import { JobsQuery } from "../../../generated/graphql";

import styles from "./styles.module.css";

type Props = Omit<JobsQuery["jobs"][number], "__typename">;

export function Card({ name, status, createdAt }: Props) {
  return (
    <article className={styles.container}>
      <h1 className={styles.title} title={name}>
        {name}
      </h1>

      <div className={styles.subtitle}>
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(DateTime.fromISO(createdAt).toJSDate())}
      </div>
    </article>
  );
}
