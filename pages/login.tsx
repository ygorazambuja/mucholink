import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import SocialButtonGroup from "../components/SocialButtonGroup";
import Title from "../components/Title";

import { toast } from "react-toastify";

import styledInput from "../styles/Input.module.scss";
import styles from "../styles/Register.module.scss";
import { useState } from "react";
import {
  PASSWORD_CANNOT_BE_NULL,
  PASSWORD_MUST_CONTAIN_EIGHT_CHARACTERS_OR_MORE,
  USERNAME_CANNOT_BE_NULL,
} from "../constants";
import ErrorHintLabel from "../components/ErrorHintLabel";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const doLogin = async (data: {}) => {
    setLoading(true);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    setLoading(false);

    if (response.status === 200) {
      toast.success("🎊 Login Successful ! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      push("/home");
    }
    if (response.status === 400) {
      toast.error("😥 Something went Wrong !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles.container}>
      <Header backRoute />
      <Title />
      <form className={styles.formContainer} onSubmit={handleSubmit(doLogin)}>
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
          className={styles.submitButton}
          disabled={loading}
        >
          Login
        </button>
      </form>

      <SocialButtonGroup></SocialButtonGroup>
    </div>
  );
}
