import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Image
          src={"/asset/github.png"}
          alt="Github Logo"
          height={30}
          width={30}
        />
        <h5>&#169; 2023 brndnwjy</h5>
      </div>

      <div className={styles["socmed-group"]}>
        <Link href={"/"} className={styles.socmed}>
          Facebook
        </Link>
        <Link href={"/"} className={styles.socmed}>
          Github
        </Link>
        <Link href={"/"} className={styles.socmed}>
          Instagram
        </Link>
        <Link href={"/"} className={styles.socmed}>
          Twitter
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
