import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { getId, getUser, login } from "../services/auth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser() || {});

  const loadingUser = async () => {
    try {
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

  const updateUser = async (data) => {
    try {
      const resp = await api.put(`/users`, data);
      if (data.oldPassword) {
        delete data.oldPassword;
        delete data.password;
        delete data.confirmPassword;
      }
      const newUser = { ...user, ...data };
      localStorage.setItem("user", JSON.stringify(newUser));
      console.log(newUser);
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
      const response = await api.post("/sessions", credenciais);
      if (response.data?.user?.provider == 1) {
        login(response.data?.token, response.data.user);

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
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
