import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={faGithub} height={30} />

        <h5>&#169; 2023 brndnwjy</h5>
      </div>

      <div className={styles["socmed-group"]}>
        <Link
          href={"https://www.facebook.com/brandon.wijaya.7528/"}
          className={styles.socmed}
        >
          Facebook
        </Link>
        <Link href={"https://github.com/brndnwjy/"} className={styles.socmed}>
          Github
        </Link>
        <Link
          href={"https://www.instagram.com/brndnwjy/"}
          className={styles.socmed}
        >
          Instagram
        </Link>
        <Link
          href={"https://www.linkedin.com/in/brndnwjy/"}
          className={styles.socmed}
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
