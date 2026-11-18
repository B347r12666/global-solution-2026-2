import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../api/endpoints/auth";
import axios from "axios";
import { apiClient } from "../api/apiClient";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Carrega os dados salvos ao iniciar a aplicação
    const storedToken = localStorage.getItem("@App:token");
    const storedUser = localStorage.getItem("@App:user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete apiClient.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const login = async (email, senha) => {
    const res = await loginUser(email, senha);
    const { access_token, usuario } = res.data;

    localStorage.setItem("@App:token", access_token);
    localStorage.setItem("@App:user", JSON.stringify(usuario));

    setToken(access_token);
    setUser(usuario);
  };

  const logout = () => {
    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:user");

    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
