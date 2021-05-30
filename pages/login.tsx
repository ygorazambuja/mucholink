import { useForm } from "react-hook-form";
import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";
import Title from "../components/Title";

import styledInput from "../styles/Input.module.scss";
import styles from "../styles/Register.module.scss";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Header></Header>
      <Title></Title>
      <form className={styles.formContainer}>
        <input
          {...register("username")}
          placeholder="Username"
          className={styledInput.input}
        ></input>
        <input
          {...register("password")}
          placeholder="Password"
          className={styledInput.input}
        ></input>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>

      <SocialButtonGroup></SocialButtonGroup>
    </>
  );
}
