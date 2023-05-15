import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginHook from "../hook/LoginPageHook";
import LoginPageHook from "../hook/LoginPageHook";
// import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] = LoginPageHook();
 

  return (
    <>
      <FormContainer>
        <form >
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>فوكس شات</h1>
          </div>
          <input
            value={email}
            type="email"
            placeholder="اكتب الايميل"
            name="email"
            onChange={onChangeEmail}
            min="3"
          />
          <input
           value={password}
            type="password"
            placeholder="كلمة السر "
            name="password"
            onChange={onChangePassword}
          />
          <button onClick={onSubmit}>تسجيل الدخول</button>
          <span>
            اذا لم يكن لديك ايميل  <Link to="/register">سجل حساب جديد.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;