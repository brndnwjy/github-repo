/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "/component/navbar";
import Footer from "../component/footer";
import styles from "../styles/Home.module.css";
import CardUser from "../component/userCard";
import { getUserDetail } from "../store/actions/userAction";
import { getRepo } from "../store/actions/repoAction";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const users = useSelector((state) => state.user.users);
  const total = useSelector((state) => state.user.total);

  const [result, setResult] = useState([]);
  const [selectedUser, setSelectedUser] = "";

  useEffect(() => {
    setResult(users);
  }, [users]);

  const selectUser = async (url, name) => {
    await dispatch(getUserDetail(url));
    await dispatch(getRepo(name))
    router.push(`/${name}`);
  };

  return (
    <>
      <Head>
        <title>Guthib</title>
        <meta name="description" content="Guthib Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        {result.length > 0 ? (
          <section className={styles.search}>
            <h2>Found {total} users</h2>
            <div className={styles.hl} />
            <div className={styles.list}>
              {result.map((item, index) => (
                <CardUser
                  key={index}
                  name={item.login}
                  avatar={item.avatar_url}
                  action={() => selectUser(item.url, item.login)}
                />
              ))}
            </div>
          </section>
        ) : (
          <section className={styles.content}>
            <h1>GutHib by brndnwjy</h1>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
};

export default Home;
