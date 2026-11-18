import { createContext, useContext } from "react";

export const AuthContext = createContext(undefined);

// Hook personalizado useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};
