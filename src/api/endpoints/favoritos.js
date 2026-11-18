import { apiClient } from "../apiClient";

export const listarFavoritos = async () => {
  return await apiClient.get("/favoritos");
};

export const favoritarLinha = async (linha_id) => {
  return await apiClient.post("/favoritos/linhas", { linha_id });
};

export const favoritarTrajeto = async (origem, destino, transporte, tempo) => {
  return await apiClient.post("/favoritos/trajetos", {
    origem,
    destino,  
    transporte,
    tempo,
  });
};

export const desfavoritarLinha = async (linha_id) => {
  return await apiClient.delete(`/favoritos/linhas/${linha_id}`);
};

export const desfavoritarTrajeto = async (trajeto_id) => {
  return await apiClient.delete(`/favoritos/trajetos/${trajeto_id}`);
};
