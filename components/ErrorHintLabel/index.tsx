import style from "../../styles/Input.module.scss";
export default function ErrorHintLabel({ message }: { message: string }) {
  return <span className={style.inputErrorHintLabel}> {message}</span>;
}
