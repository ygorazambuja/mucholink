import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ADD_NEW_CARD, ICONS } from "../../constants";
import styles from "./CardList.module.scss";

interface CardListProps {
  cards: CardItem[];
  editable?: boolean;
}

interface CardItem {
  url: string;
  name: string;
  icon: string;
}

export default function CardList({ cards, editable = false }: CardListProps) {
  const canAddMoreButtons = () => cards.length <= 5 && editable;

  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => {
          return <Card {...card}></Card>;
        })}
      {canAddMoreButtons() && <AddCard></AddCard>}
    </div>
  );
}

function AddCard() {
  const openNewCardModal = () => {
    console.log("modal open");
  };
  return (
    <div className={styles.card} onClick={openNewCardModal}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </div>
      <span>{ADD_NEW_CARD}</span>
    </div>
  );
}

function Card({ url, name, icon }: CardItem) {
  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={ICONS[icon]} />
      </div>
      <span>{name}</span>
    </div>
  );
}
