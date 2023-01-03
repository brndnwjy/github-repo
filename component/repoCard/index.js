import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./repoCard.module.css";

const RepoCard = ({ name, lang, timestamp, destination }) => {
  return (
    <card className={styles.card}>
      <div className={styles.detail}>
        <h3>{name}</h3>
        <div>
          {lang && (
            <div>
              <FontAwesomeIcon icon={faCode} height={15} width={15} />

              <small>{lang}</small>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faCalendar} height={15} width={15} />

            <small>
              Created at {new Date(timestamp).getMonth()}/
              {new Date(timestamp).getDate()}/
              {new Date(timestamp).getFullYear()}
            </small>
          </div>
        </div>
      </div>

      <Link href={destination} className={styles["github-btn"]}>
        Open on Github
      </Link>
    </card>
  );
};

export default RepoCard;
