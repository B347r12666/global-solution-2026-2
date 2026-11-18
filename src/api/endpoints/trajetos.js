import { apiClient } from "../apiClient";

export const trajetos = async (origem, destino, limite = 10) => {
  return await apiClient.get("/trajetos", {
    params: { origem, destino, limite },
  });
};
