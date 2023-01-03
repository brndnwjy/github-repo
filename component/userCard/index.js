import Image from "next/image";
import styles from "./userCard.module.css";

const UserCard = ({ name, avatar, action }) => {
  return (
    <card className={styles.card}>
      <div className={styles.profile}>
        <Image
          src={avatar}
          alt="User Avatar"
          width={70}
          height={70}
          className={styles.ava}
        />
        <h3>{name}</h3>
      </div>

      <button className={styles["profile-btn"]} onClick={action}>
        See Profile
      </button>
    </card>
  );
};

export default UserCard;
