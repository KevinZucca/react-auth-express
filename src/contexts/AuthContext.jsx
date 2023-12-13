import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    () => localStorage.getItem("token") ?? null
  );

  const navigate = useNavigate();

  function handleLogin(payload) {
    setIsLoggedIn(true);
    setUser(payload);
    console.log(payload);
    storeToken(payload.token);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUser({});
    localStorage.removeItem("token");

    setTimeout(() => {
      navigate("/");
    });
  }

  function storeToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  const values = {
    isLoggedIn,
    user,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
