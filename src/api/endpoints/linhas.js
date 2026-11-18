import { apiClient } from "../apiClient";

export const listarLinhas = async (tipo, q, limite, pular) => {
  return await apiClient.get("/linhas", { params: { tipo, q, limite, pular } });
};

export const obterLinha = async (id) => {
  return await apiClient.get(`/linhas/${id}`);
};

export const shapeLinha = async (id) => {
  return await apiClient.get(`/linhas/${id}/shape`);
};

export const paradasLinha = async (id) => {
  return await apiClient.get(`/linhas/${id}/paradas`);
};

export const buscar = async (q, limite) => {
  return await apiClient.get("/buscar", { params: { q, limite } });
};
