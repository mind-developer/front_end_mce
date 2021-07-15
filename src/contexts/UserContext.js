import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId, login } from "../services/auth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadingUser = async () => {
    try {
      const id = getId();
      const { data } = await api.get(`/users/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const deleteUsers = async (id) => {
    try {
      const { data } = await api.delete(`/users/${id}`);
      toast.success(data.message);
      return data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");

      return false;
    }
  };

  const updateUser = async (data, id) => {
    try {
      const resp = await api.put(`/users/${id}`, data);
      toast.success(resp?.data?.message);
      return resp.data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");

      return false;
    }
  };

  const createUser = async (data) => {
    try {
      const resp = await api.post(`/users`, data);
      toast.success("Criado com sucesso");
      return resp.data;
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");

      return false;
    }
  };

  const signIn = async (credenciais) => {
    console.log(credenciais);
    try {
      const response = await api.post("/auth", credenciais);
      if (response.data?.user?.acesso == 1) {
        login(
          response.data?.token,
          response.data?.user?.nivel,
          response.data?.user?.id
        );

        toast.success("Bem Vindo!");
        return true;
      } else {
        toast.error("Usuário não autorizado");
        return false;
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Ops... Ocorreu um erro");
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        deleteUsers,
        loadingUser,
        updateUser,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
