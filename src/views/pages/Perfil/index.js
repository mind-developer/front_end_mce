import React, { useState, useEffect, useContext, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { AuthContext } from "../../../contexts/UserContext";
import { getId } from "../../../services/auth";
import * as Yup from "yup";
import ProfileImg from "../../../assets/profile.jpeg";

import { Container, Forms, Profile, ContainerProfile } from "./styles";
import getValidationErrors from "../../../utils/getValidationErrors";
import { BiEdit } from "react-icons/bi";
import colors from "../../../styles/colors";

function Perfil() {
  const [user, setUser] = useState({});
  const formRef = useRef(null);

  const { loadingUser, updateUser } = useContext(AuthContext);
  const id = getId();

  useEffect(async () => {
    setUser(await loadingUser());
  }, []);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        nivel: Yup.number().required("Nivel é obrigatório"),
        acesso: Yup.number().required("Acesso é obrigatorio"),
        senha: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      if (data.senha == "") delete data.senha;
      const resp = await updateUser(data, id);
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
      <Forms onSubmit={handleSubmit} initialData={{ ...user, senha: "" }}>
        <Input name="nome" placeholder="Nome do Usuário" />
        <Input
          name="cpf"
          formatar="(99) 9 9999-9999"
          placeholder="Número de telefone"
        />
        <Input name="email" placeholder="E-mail" />
        <Input name="senha" placeholder="Senha" type="password" />
        <Button style={{ width: "110%" }}>Salvar alterações </Button>
      </Forms>
    </Container>
  );
}

export default Perfil;
