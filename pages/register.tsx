import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";

import { useForm } from "react-hook-form";
import { RegisterUser } from "../services/usecases/RegisterUser";
import Title from "../components/Title";

import styledInput from "../styles/Input.module.scss";
import styles from "../styles/Register.module.scss";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: {
    email: string;
    username: string;
    password: string;
    confirmationPassword: string;
  }) => {
    const response = await RegisterUser({ ...formData });
    const json = await response.json();

    console.log(json);
  };

  return (
    <div className={styles.container}>
      <Header></Header>
      <Title></Title>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          {...register("email")}
          placeholder="Email"
          className={styledInput.input}
        ></input>
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
        <input
          {...register("confirmationPassword")}
          placeholder="Confirmation Password"
          className={styledInput.input}
        ></input>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <SocialButtonGroup></SocialButtonGroup>
    </div>
  );
}
