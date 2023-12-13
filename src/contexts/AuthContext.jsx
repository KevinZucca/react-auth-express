import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    () => localStorage.getItem("token") ?? null
  );

  function handleLogin(payload) {
    setIsLoggedIn(true);
    setUser(payload);
    console.log(payload);
    storeToken(payload.token);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUser({});
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
