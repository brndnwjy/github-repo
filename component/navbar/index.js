import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      console.log(search);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=5`)
        .then((res) => res.json())
        .then((data) => setResult(data.items));
    }
  };

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
        name="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />
      {/* <button className={styles.slash}>&#47;</button> */}
    </nav>
  );
};

export default Navbar;
