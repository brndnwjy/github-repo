import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "/component/navbar";
import styles from "../styles/Home.module.css";
import Footer from "../component/footer";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>RepoHub</title>
        <meta name="description" content="RepoHub Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <section className={styles.content}>
          RepoHub is made with Next.js, in this app you can search for a github
          user and look over their repository list.
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
