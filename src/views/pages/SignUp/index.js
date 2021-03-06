import React, { useEffect, useRef, useContext, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as Yup from "yup";

import { Container, Forms, Body } from "./styles";
import getValidationErrors from "../../../utils/getValidationErrors";
import { AuthContext } from "../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { getToken } from "../../../services/auth";
import colors from "../../../styles/colors";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Cadastro() {
  const formRef = useRef(null);
  const { createUser } = useContext(AuthContext);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCofirmation, setShowPasswordCofirmation] = useState(false);

  useEffect(() => {
    if (getToken() != null) {
      history.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        phone: Yup.string().required("Cpf obrigatório").min(11, "CPF Inválido"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("É obrigatória"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Não são iguais"
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      delete data.confirmPassword;
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
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Usuario" />
          <Input
            name="phone"
            formatar="(99) 9 9999-9999"
            placeholder="Telefone"
          />
          <Input name="email" placeholder="E-mail" />
          <Input
            name="password"
            placeholder="Senha"
            type={!showPassword && "password"}
          >
            {!showPassword ? (
              <AiFillEye
                color={colors.lightGray}
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiFillEyeInvisible
                color={colors.lightGray}
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </Input>
          <Input
            name="confirmPassword"
            placeholder="Confirma senha"
            type={!showPasswordCofirmation && "password"}
          >
            {!showPasswordCofirmation ? (
              <AiFillEye
                color={colors.lightGray}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setShowPasswordCofirmation(!showPasswordCofirmation)
                }
              />
            ) : (
              <AiFillEyeInvisible
                color={colors.lightGray}
                onClick={() =>
                  setShowPasswordCofirmation(!showPasswordCofirmation)
                }
                style={{ cursor: "pointer" }}
              />
            )}
          </Input>
          <Button>CADASTRAR</Button>
        </Forms>
        <div>
          Já tem conta ? <a href="/">Login</a>
        </div>
      </Body>
    </Container>
  );
}

export default Cadastro;
