import React, { useState, useEffect, useContext, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AuthContext } from "../../../contexts/UserContext";
import { getId, getUser } from "../../../services/auth";
import * as Yup from "yup";
import ProfileImg from "../../../assets/profile.jpeg";

import { Container, Forms, Profile, ContainerProfile } from "./styles";
import getValidationErrors from "../../../utils/getValidationErrors";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

function Perfil() {
  const formRef = useRef(null);

  const { updateUser, user } = useContext(AuthContext);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string(),
        phone: Yup.string(),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
          .min(6)
          .when("oldPassword", (oldPassword, field) =>
            oldPassword ? field.required() : field
          ),
        confirmPassword: Yup.string().when("password", (password, field) =>
          password ? field.required().oneOf([Yup.ref("password")]) : field
        ),
      });
      schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      if (!data.oldPassword) {
        delete data.oldPassword;
        delete data.password;
        delete data.confirmPassword;
      }

      await updateUser(data);
      toast.success("Alterado com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <ContainerProfile>
        <Profile src={ProfileImg} />
        <button>
          <BiEdit />
        </button>
      </ContainerProfile>
      <Forms onSubmit={handleSubmit} initialData={user}>
        <Input name="name" placeholder="Nome do Usuário" />
        <Input
          name="phone"
          formatar="(99) 9 9999-9999"
          placeholder="Número de telefone"
        />
        <Input name="email" placeholder="E-mail" />
        <Input name="oldPassword" placeholder="Senha antiga" type="password" />
        <Input name="password" placeholder="Senha" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Confirma senha"
          type="password"
        />
        <Button style={{ width: "110%" }}>Salvar alterações </Button>
      </Forms>
    </Container>
  );
}

export default Perfil;
