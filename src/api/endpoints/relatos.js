import { apiClient } from "../apiClient";

export const listarRelatos = async (linha_id, transporte, limite, pular) => {
  return await apiClient.get("/relatos", {
    params: { linha_id, transporte, limite, pular },
  });
};

export const criarRelato = async (
  transporte,
  linha_id,
  avaliacoes,
  comentario,
) => {
  return await apiClient.post("/relatos", {
    transporte,
    linha_id,
    avaliacoes,
    comentario,
  });
};
