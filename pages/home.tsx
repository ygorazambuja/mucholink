import Avatar from "../components/Avatar";
import CardList from "../components/CardList";
import Header from "../components/Header";
import IconButtonGroup from "../components/IconButtonGroup";

import styles from "../styles/Home.module.scss";

const userMock = {
  userName: "Ygor Azambuja",
  imgUrl: "https://i.pravatar.cc/300",
  userInfo: "Software Developer",
};

const iconListMock = [
  {
    url: "https://www.twitch.com/ygoazambuja",
    icon: "twitch",
    id: 1,
  },
  {
    url: "https://www.instagram.com/ygoazambuja",
    icon: "instagram",
    id: 2,
  },
  {
    url: "https://www.youtube.com/ygoazambuja",
    icon: "youtube",
    id: 3,
  },
  {
    url: "https://www.facebook.com/ygorazambuja",
    icon: "facebook",
    id: 4,
  },
  {
    url: "twitter.com/ygoazambuja",
    icon: "twitter",
    id: 5,
  },
];

const cardListMock = [
  {
    url: "https://www.instagram.com/ygoazambuja",
    name: "Instagram",
    icon: "instagram",
  },
  {
    url: "https://www.linkedin.com/in/ygorazambuja/",
    name: "LinkedIn",
    icon: "linkedin",
  },
  {
    url: "mailto:ygorazambuja@gmail.com",
    name: "Contact Email",
    icon: "envelope",
  },
  {
    url: "https://www.github.com/ygorazambuja",
    name: "Github",
    icon: "github",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Avatar
        userName={userMock.userName}
        imgUrl={userMock.imgUrl}
        userInfo={userMock.userInfo}
        editable
      />
      <IconButtonGroup iconList={iconListMock} editable />
      <CardList cards={cardListMock} editable />
    </div>
  );
}
