import React, { useRef, useContext } from "react";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { AuthContext } from "../../../../contexts/UserContext";
import getValidationErrors from "../../../../utils/getValidationErrors";

import { Container, Forms, Body } from "./styles";

function ModalEdit({ setShowModalEdit, user, loading }) {
  const formRef = useRef(null);

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        nivel: Yup.number().required("Nivel é obrigatório"),
        acesso: Yup.number().required("Acesso é obrigatorio"),
        senha: Yup.string(),
        senha_confirmation: Yup.string().oneOf(
          [Yup.ref("senha"), null],
          "Não são iguais"
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      if (data.senha == "") {
        delete data.senha_confirmation;
        delete data.senha;
      }
      const resp = await updateUser(data, user?.id);
      loading();
      setShowModalEdit(false);
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <Body>
        <h1>EDITAR</h1>
        <Forms
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ ...user, senha: "" }}
        >
          <span>Nome completo</span>
          <Input name="nome" placeholder="Your name" />
          <span>Nivel</span>
          <Input name="nivel" placeholder="your level" />
          <span>Acesso</span>
          <Input name="acesso" placeholder="your access" />
          <span>Senha</span>
          <Input name="senha" placeholder="****" type="password" />
          <span>Confirma senha</span>
          <Input name="senha_confirmation" placeholder="****" type="password" />
          <Button>ATUALIZAR</Button>
        </Forms>
        <a href="#" onClick={() => setShowModalEdit(false)}>
          Voltar
        </a>
      </Body>
    </Container>
  );
}

export default ModalEdit;
