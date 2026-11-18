import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../api/endpoints/auth";
import { apiClient } from "../api/apiClient";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const carregarAutenticacao = () => {
      try {
        const storedToken = localStorage.getItem("@App:token");
        const storedUser = localStorage.getItem("@App:user");

        if (storedToken && storedUser) {
          const parsedUser = JSON.parse(storedUser);

          setToken(storedToken);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Erro ao recuperar autenticação:", error);

        localStorage.removeItem("@App:token");
        localStorage.removeItem("@App:user");

        delete apiClient.defaults.headers.common["Authorization"];
      } finally {
        setAuthLoading(false);
      }
    };

    carregarAutenticacao();
  }, []);

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
    authLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
