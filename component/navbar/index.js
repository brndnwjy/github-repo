import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "./navbar.module.css";
import { emptyUser, getUser } from "../../store/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState();

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      console.log(search);
      dispatch(getUser(search));
    }
  };

  const emptySearch = async (e) => {
    dispatch(emptyUser());
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src={"/asset/github.png"}
        alt="Gihtub Logo"
        height={40}
        width={40}
        onClick={emptySearch}
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
