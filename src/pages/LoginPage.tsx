import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

import styles from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const loginSuccess: boolean = login(username, password);
    if (loginSuccess) {
      setMessage("");
      history.push("/");
    } else {
      if (!username || !password) {
        setMessage("Error: Please enter username/password.");
      } else {
        setMessage("Error: Invalid login credentials.");
      }
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h1>Login Page</h1>
        <div className={styles.errorMessage}>{message}</div>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
