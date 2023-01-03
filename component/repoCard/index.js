import Link from "next/link";
import styles from "./repoCard.module.css";

const RepoCard = ({ name, lang, timestamp, destination }) => {
  return (
    <card className={styles.card}>
      <div>
        <h3>{name}</h3>
        <div>
          <small>{lang}</small>
          <small>Created at {timestamp}</small>
        </div>
      </div>

      <Link href={destination} className={styles["github-btn"]}>
        Open on Github
      </Link>
    </card>
  );
};

export default RepoCard;
