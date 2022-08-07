import type { ReactNode } from "react";
import { Status } from "../../../generated/graphql";

import styles from "./styles.module.css";

type Props = { status: Status; children?: ReactNode };

export function Column({ status, children }: Props) {
  return (
    <section
      className={styles.container + " " + styles[`container--${status}`]}
    >
      <h3>
        {status === "TO_DO"
          ? "To do"
          : status === "IN_PROGRESS"
          ? "In progress"
          : "Done"}
      </h3>

      <div className={styles.listContainer}>
        <div className={styles.list}>
          <div className={styles.items}>{children}</div>
        </div>
      </div>
    </section>
  );
}
