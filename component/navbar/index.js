import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { emptyUser, getUser } from "../../store/actions/userAction";
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [search, setSearch] = useState();

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      console.log(search);
      dispatch(getUser(search));
    }
  };

  const emptySearch = async (e) => {
    router.push("/");
    dispatch(emptyUser());
  };

  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon icon={faGithub} height={40} className={styles.logo} onClick={emptySearch} />
      <input
        placeholder="Search or jump to..."
        className={styles["search-field"]}
        name="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
