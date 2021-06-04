import styles from "./Avatar.module.scss";

interface AvatarProps {
  imgUrl: string;
  userName: string;
  userInfo: string;
  editable?: boolean;
}

export default function Avatar({
  imgUrl,
  userName,
  userInfo,
  editable = false,
}: AvatarProps) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={imgUrl} alt="Avatar" />
      <span className={styles.userName}>{userName}</span>
      <span className={styles.userDescription}>{userInfo}</span>
    </div>
  );
}
