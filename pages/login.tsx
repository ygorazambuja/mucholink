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

  const doLogin = (data: {}) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Header backRoute></Header>
      <Title></Title>
      <form className={styles.formContainer} onSubmit={handleSubmit(doLogin)}>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
          className={`${styledInput.input} ${styledInput.inputError}`}
        ></input>
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          className={styledInput.input}
        ></input>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>

      <SocialButtonGroup></SocialButtonGroup>
    </div>
  );
}
