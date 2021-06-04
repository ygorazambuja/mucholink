import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../constants";

import style from "./IconButtonGroup.module.scss";

interface IconButton {
  url: string;
  icon: string;
  id: number;
}

interface IconButtonGroupProps {
  iconList: IconButton[];
  editable?: boolean;
}

export default function IconButtonGroup({
  iconList,
  editable = false,
}: IconButtonGroupProps) {
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  const canAddMoreButtons = () => iconList.length <= 5 && editable;

  const openNewCardModal = () => {
    console.log("modal open");
  };

  return (
    <div className={style.group}>
      {iconList &&
        iconList.map((element) => {
          return (
            <button
              key={element.id}
              onClick={() => {
                handleButtonClick(element.url);
              }}
            >
              <FontAwesomeIcon icon={ICONS[element.icon]} size="lg" />
            </button>
          );
        })}
      {canAddMoreButtons() && (
        <button onClick={openNewCardModal}>
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
      )}
    </div>
  );
}
