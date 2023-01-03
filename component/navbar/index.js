import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={"/asset/github.png"}
        alt="Gihtub Logo"
        height={40}
        width={40}
      />

        <input
          placeholder="Search or jump to..."
          className={styles["search-field"]}
        />
        {/* <button className={styles.slash}>&#47;</button> */}
    </nav>
  );
};

export default Navbar;
