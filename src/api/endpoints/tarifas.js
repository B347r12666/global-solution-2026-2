import { apiClient } from "../apiClient";

export const listarTarifas = async (fonte = "sptrans") => {
  return await apiClient.get("/tarifas", { params: { fonte } });
};
