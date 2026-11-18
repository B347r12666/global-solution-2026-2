import { apiClient } from "../apiClient";

export const listarAvisos = async (limite = 30) => {
  return await apiClient.get("/avisos", { params: { limite } });
};
