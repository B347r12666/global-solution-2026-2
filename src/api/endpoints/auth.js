import { apiClient } from "../apiClient";

export const loginUser = async (email, senha) => {
  return await apiClient.post("/auth/login", { email, senha });
};

export const registerUser = async (nome, email, senha) => {
  return await apiClient.post("/auth/registro", { nome, email, senha });
};
