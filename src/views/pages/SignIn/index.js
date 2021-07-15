import React, { useRef, useContext, useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { Container, Forms, Body, Image } from "./styles";
import * as Yup from "yup";
import getValidationErrors from "../../../utils/getValidationErrors";
import { AuthContext } from "../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { getToken } from "../../../services/auth";
import colors from "../../../styles/colors";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import Logo from "../../../assets/Logo.png";

function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (getToken() != null) {
      history.push("/dashboard");
    }
  }, []);

  const { signIn: login } = useContext(AuthContext);
  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        login: Yup.string().required("login obrigatório"),
        senha: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      const resp = await login(data);
      history.push("/dashboard");
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      {" "}
      <Body>
        <Image src={Logo} />
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="login"
            placeholder="Youraddres@email.com"
            color={colors.darkBlue}
          >
            <AiFillCheckCircle size={25} />
          </Input>
          <Input
            name="senha"
            placeholder="Enter your password"
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
          <Button>LOGIN</Button>
          <a href="/register">Esqueci a senha</a>
        </Forms>
        <div>
          Não tem conta? <a href="/register">Registrar-se</a>
        </div>
      </Body>
    </Container>
  );
}

export default SignIn;
