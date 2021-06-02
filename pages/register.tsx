import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";

import { useForm } from "react-hook-form";
import { RegisterUser } from "../services/usecases/RegisterUser";
import Title from "../components/Title";

import styledInput from "../styles/Input.module.scss";
import styles from "../styles/Register.module.scss";
import { useRef } from "react";
import { EMAIL_CANNOT_BE_NULL, PASSWORDS_DO_NOT_MATCH, PASSWORD_CANNOT_BE_NULL, PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE, USERNAME_CANNOT_BE_NULL } from "../constants";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  const { push } = useRouter()
  password.current = watch("password", "");

  const doRegister = async (formData: {
    email: string;
    username: string;
    password: string;
    confirmationPassword: string;
  }) => {
    const response = await RegisterUser({ ...formData });
    const json = await response.json();

    if(response.status === 200) { 
      toast.success("Account Created 🎊!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset()
      push('/login')
    } 
  };

  return (
    <div className={styles.container}>
      <Header backRoute />
      <Title />
      <form
        onSubmit={handleSubmit(doRegister)}
        className={styles.formContainer}
      >
        <input
          type="email"
          {...register("email", { required: EMAIL_CANNOT_BE_NULL })}
          placeholder="Email"
          className={`${styledInput.input} ${
            errors.email ? styledInput.inputError : ""
          }`}
        />
        {errors.email && (
          <span className={styledInput.inputErrorHintLabel}>
            {errors.email.message}
          </span>
        )}
        <input
          {...register("username", { required: USERNAME_CANNOT_BE_NULL })}
          placeholder="Username"
          className={`${styledInput.input} ${
            errors.username ? styledInput.inputError : ""
          }`}
        />
        {errors.username && (
          <span className={styledInput.inputErrorHintLabel}>
            {errors.username.message}
          </span>
        )}
        <input
          {...register("password", {
            required: PASSWORD_CANNOT_BE_NULL,
            minLength: {
              value: 8,
              message: PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE,
            },
          })}
          placeholder="Password"
          type="password"
          className={`${styledInput.input} ${
            errors.password ? styledInput.inputError : ""
          }`}
        />
        {errors.password && (
          <span className={styledInput.inputErrorHintLabel}>
            {errors.password.message}
          </span>
        )}
        <input
          {...register("confirmationPassword", {
            validate: (value) =>
              value === password.current || PASSWORDS_DO_NOT_MATCH,
          })}
          placeholder="Confirmation Password"
          type="password"
          className={`${styledInput.input} ${
            errors.confirmationPassword ? styledInput.inputError : ""
          }`}
        />
        {errors.confirmationPassword && (
          <span className={styledInput.inputErrorHintLabel}>
            {errors.confirmationPassword.message}
          </span>
        )}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <SocialButtonGroup></SocialButtonGroup>
    </div>
  );
}
