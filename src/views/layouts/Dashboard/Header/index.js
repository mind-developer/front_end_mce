import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { logout } from "../../../../services/auth";

import { Container, Content, NamePage, Buscar } from "./styles";

function Header({ name }) {
  return (
    <Container>
      <Content>
        <Buscar>
          <button>
            <RiSearchLine size={20} />
          </button>
          <input name="buscar" placeholder="search..." />
        </Buscar>
        <button
          onClick={() => {
            logout();
            toast.success("Deslogado com sucesso!");
            setTimeout(() => {
              window.location.reload();
            }, 200);
          }}
        >
          Logout
        </button>
      </Content>
      <NamePage>
        <b>{name}</b>
      </NamePage>
    </Container>
  );
}

export default Header;
