import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "/component/navbar";
import Footer from "../component/footer";
import styles from "../styles/Profile.module.css";
import ProfileCard from "../component/profileCard";
import RepoCard from "../component/repoCard";
import { getRepo } from "../store/actions/repoAction";

const Profile = () => {
  const router = useRouter();
  const { name } = router.query;

  const user = useSelector((state) => state.user.user);
  const repo = useSelector((state) => state.repo.repo);
  const total = useSelector((state) => state.repo.total);

  useEffect(() => {
    console.log("repo");
    console.log(repo);
    console.log(total);
    console.log("repo");
  }, [repo, total]);

  return (
    <>
      <Head>
        <title>Guthib</title>
        <meta name="description" content={`Guthib - ${name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <section className={styles.content}>
          <ProfileCard
            name={user?.login}
            avatar={user?.avatar_url}
            bio={user?.bio}
            follower={user?.followers}
            following={user?.following}
            company={user?.company}
            location={user?.location}
            twitter={user?.twitter}
          />
          <div className={styles["repo-list"]}>
            <h1>{total} Repositories</h1>

            <div className={styles.hl} />

            {total > 0 ? (
              repo.map((item, index) => (
                <RepoCard
                  key={index}
                  name={item.name}
                  lang={item.language}
                  timestamp={item.created_at}
                  destination={item.html_url}
                />
              ))
            ) : (
              <h3>Repository Empty</h3>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Profile;
