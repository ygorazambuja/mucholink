import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";

import { useForm } from "react-hook-form";
import { RegisterUser } from "../services/usecases/RegisterUser";
import Title from "../components/Title";

import styledInput from "../styles/Input.module.scss";
import styles from "../styles/Register.module.scss";
import buttonStyles from "../components/Buttons/Buttons.module.scss";
import { useRef } from "react";
import {
  ACCOUNT_CREATED_MESSAGE,
  EMAIL_CANNOT_BE_NULL,
  LOGIN_ERROR_MESSAGE,
  PASSWORDS_DO_NOT_MATCH,
  PASSWORD_CANNOT_BE_NULL,
  PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE,
  TOAST_ERROR,
  TOAST_SUCCESS,
  USERNAME_CANNOT_BE_NULL,
} from "../constants";
import { useRouter } from "next/router";
import Toast from "../components/Toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  const { push } = useRouter();
  password.current = watch("password", "");

  const doRegister = async (formData: {
    email: string;
    username: string;
    password: string;
    confirmationPassword: string;
  }) => {
    const response = await RegisterUser({ ...formData });
    const json = await response.json();

    if (response.status === 200) {
      Toast({ status: TOAST_SUCCESS, message: ACCOUNT_CREATED_MESSAGE });
      reset();
      push("/login");
    }
    if (response.status !== 200) {
      Toast({ status: TOAST_ERROR, message: LOGIN_ERROR_MESSAGE });
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
        <button type="submit" className={buttonStyles.submitButton}>
          Register
        </button>
      </form>
      <SocialButtonGroup></SocialButtonGroup>
    </div>
  );
}
