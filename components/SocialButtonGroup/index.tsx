import {
  faApple,
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "../../styles/SocialButtonGroup.module.scss";

export default function SocialButtonGroup() {
  return (
    <div className={style.container}>
      <span className={style.subtitle}>or</span>
      <div className={style.buttonContainer}>
        <FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGoogle} size="lg"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faApple} size="lg"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
      </div>
    </div>
  );
}
