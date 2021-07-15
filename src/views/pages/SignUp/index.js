import React, { useEffect, useRef, useContext } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as Yup from "yup";

import { Container, Forms, Body } from "./styles";
import getValidationErrors from "../../../utils/getValidationErrors";
import { AuthContext } from "../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { getToken } from "../../../services/auth";

function Cadastro() {
  const formRef = useRef(null);
  const { createUser } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (getToken() != null) {
      history.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        cpf: Yup.string().required("Cpf obrigatório").min(11, "CPF Inválido"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        senha: Yup.string().required("É obrigatória"),
        senha_confirmation: Yup.string().oneOf(
          [Yup.ref("senha"), null],
          "Não são iguais"
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      delete data.senha_confirmation;
      await createUser(data);
      history.push("/");
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <Body>
        <h1>CADASTRO</h1>
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <span>Nome completo</span>
          <Input name="nome" placeholder="Your name" />
          <span>E-mail</span>
          <Input name="email" placeholder="Youraddres@email.com" />
          <span>CPF</span>
          <Input name="cpf" formatar="999.999.999-99" placeholder="your cpf" />
          <span>Senha</span>
          <Input name="senha" placeholder="****" type="password" />
          <span>Confirma senha</span>
          <Input name="senha_confirmation" placeholder="****" type="password" />
          <Button>CADASTRAR</Button>
        </Forms>
        <div>
          Já possui uma conta ? <a href="/">Entrar</a>
        </div>
      </Body>
    </Container>
  );
}

export default Cadastro;
