/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Navbar from "/component/navbar";
import Footer from "../component/footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  const users = useSelector((state) => state.user.users);

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
          <section className={styles.content2}>
            {result.map((item, index) => (
              <p key={index}>{item.login}</p>
            ))}
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
