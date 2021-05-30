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

  const doRegister = async (formData: {
    email: string;
    username: string;
    password: string;
    confirmationPassword: string;
  }) => {
    console.log(formData);
    const response = await RegisterUser({ ...formData });
    const json = await response.json();

    if (json?.error?.code === 11000) {
      console.log("validation error");
    }
  };

  return (
    <div className={styles.container}>
      <Header backRoute></Header>
      <Title></Title>
      <form
        onSubmit={handleSubmit(doRegister)}
        className={styles.formContainer}
      >
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className={styledInput.input}
        ></input>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
          className={styledInput.input}
        ></input>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className={styledInput.input}
        ></input>
        <input
          {...register("confirmationPassword")}
          placeholder="Confirmation Password"
          type="password"
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
