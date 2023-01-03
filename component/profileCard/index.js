import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLocationPin,
//   faUser,
//   faBuilding,
// } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationPin,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./profileCard.module.css";

const ProfileCard = ({
  name,
  avatar,
  bio,
  follower,
  following,
  company,
  location,
  twitter,
}) => {
  return (
    <card className={styles.card}>
      <Image
        src={avatar}
        alt="User Avatar"
        width={100}
        height={100}
        className={styles.ava}
      />
      <h2>{name}</h2>
      <p>{bio}</p>

      <div className={styles.infograph}>
        <FontAwesomeIcon icon={faUser} height={15} />
        <p>
          <span>{follower}</span> Followers &#8226; <span>{following}</span>{" "}
          Following
        </p>
      </div>

      <div className={styles.infograph}>
        <FontAwesomeIcon icon={faBuilding} height={15} />
        <p>{company}</p>
      </div>

      <div className={styles.infograph}>
        <FontAwesomeIcon icon={faLocationPin} height={15} />
        <p>{location}</p>
      </div>

      <div className={styles.infograph}>
        <FontAwesomeIcon icon={faTwitter} height={15} />
        <p>{twitter}</p>
      </div>
    </card>
  );
};

export default ProfileCard;
