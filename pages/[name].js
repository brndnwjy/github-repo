import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "/component/navbar";
import Footer from "../component/footer";
import styles from "../styles/Profile.module.css";
import ProfileCard from "../component/profileCard";

const Profile = () => {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [name]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/repos`)
      .then((res) => res.json())
      .then((data) => console.log(data.length));
  }, [name]);

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

        <section className={styles.content}>
          <ProfileCard
            name={"Mario"}
            avatar={"/asset/github.png"}
            bio={
              "Pixel processor 📸 Neural Networks 🧠 Python fanatic 🐍 JAX & NumPy ninja. Solo traveller 🌴"
            }
            follower={"200"}
            following={"200"}
            company={"Universität Stuttgart"}
            location={"Stuttgart, DE"}
            twitter={"@ScientificML"}
          />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Profile;
