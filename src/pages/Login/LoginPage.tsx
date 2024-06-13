// Actions
import { loginAction } from "../../redux/slices/authSlice";

// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Models
import { LoginForm } from "../../models/auth";

// Store - hooks
import { useAppDispatch } from "../../redux/store/hooks";

// Styles
import "./LoginPage.scss";
import { loginService } from "../../service/auth/auth.service";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { values, handleChange } = useForm<LoginForm>({
    user: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await loginService(values.user, values.password);
    // if (!response) return;

    // const { user, token } = response;
    dispatch(
      loginAction({
        user: {
          id:12,
          name: 'Wilhen',
          lastName:"Gutierrez",
          numberPhone: '123345678',
          email: 'wfgp1206@gmail.com',
        },
        token:'token de sesión',
      })
    );
    return;
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage__header">
        <h1>LOGIN</h1>
      </div>
      <form id="loginForm" className="LoginPage__form" onSubmit={handleSubmit}>
        <div>
          <div className="LoginPage__form__field">
            <label className="LoginPage__form__label">Usuario :</label>
            <input
              type="text"
              name="user"
              className="LoginPage__form__input"
              placeholder="Ingrese su numero de cédula"
              value={values.user}
              onChange={handleChange}
              required
            />
          </div>
          <div className="LoginPage__form__field">
            <label className="LoginPage__form__label">Contraseña: </label>
            <input
              type="password"
              name="password"
              className="LoginPage__form__input"
              placeholder="Escribe tu contraseña"
              value={values.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
        </div>
        <button className="LoginPage__form__button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
