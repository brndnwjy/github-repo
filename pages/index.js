/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Navbar from "/component/navbar";
import Footer from "../component/footer";
import styles from "../styles/Home.module.css";
import CardUser from "../component/cardUser";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  const total = useSelector((state) => state.user.total);

  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(users);
    console.log("users");
    console.log(users);
    console.log("users");
  }, [users]);

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

        {result.length > 1 ? (
          <section className={styles.search}>
            <h2>Found {total} users</h2>
            <div className={styles.hl} />
            <div className={styles.list}>
              {result.map((item, index) => (
                <CardUser
                  key={index}
                  name={item.login}
                  avatar={item.avatar_url}
                  // action={}
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
