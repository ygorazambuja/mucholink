import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";
import Title from "../components/Title";

import styledInput from "../styles/Input.module.scss";
import buttonStyles from "../components/Buttons/Buttons.module.scss";
import pageStyles from "../styles/Register.module.scss";

import { useState } from "react";
import {
  LOGIN_ERROR_MESSAGE,
  LOGIN_SUCCESSFUL,
  PASSWORD_CANNOT_BE_NULL,
  PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE,
  TOAST_ERROR,
  TOAST_SUCCESS,
  USERNAME_CANNOT_BE_NULL,
} from "../constants";
import ErrorHintLabel from "../components/ErrorHintLabel";
import { DoLogin } from "../services/usecases/DoLogin";
import Toast from "../components/Toast";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const doLogin = async (data: { username: string; password: string }) => {
    setLoading(true);

    const { username, password } = data;
    const response = await DoLogin({ username, password });
    const json = await response.json();

    console.log(json);

    // jaliton  1º ano
    setLoading(false);

    if (response.status === 200) {
      Toast({ status: TOAST_SUCCESS, message: LOGIN_SUCCESSFUL });
      push("/home");
    }
    if (response.status === 400) {
      Toast({ status: TOAST_ERROR, message: LOGIN_ERROR_MESSAGE });
    }
  };

  return (
    <div className={pageStyles.container}>
      <Header backRoute />
      <Title />
      <form className={pageStyles.formContainer} onSubmit={handleSubmit(doLogin)}>
        <input
          {...register("username", { required: USERNAME_CANNOT_BE_NULL })}
          placeholder="Username"
          className={`${styledInput.input} ${
            errors.username ? styledInput.inputError : ""
          }`}
          disabled={loading}
        />
        {errors.username && (
          <ErrorHintLabel message={errors.username.message} />
        )}
        <input
          type="password"
          {...register("password", {
            required: PASSWORD_CANNOT_BE_NULL,
            minLength: {
              value: 8,
              message: PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE,
            },
          })}
          placeholder="Password"
          className={`${styledInput.input} ${
            errors.password ? styledInput.inputError : ""
          }`}
          disabled={loading}
        />
        {errors.password && (
          <ErrorHintLabel message={errors.password.message} />
        )}
        <button
          type="submit"
          className={buttonStyles.submitButton}
          disabled={loading}
        >
          Login
        </button>
      </form>

      <SocialButtonGroup />
    </div>
  );
}
