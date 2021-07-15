import React, { useContext } from "react";
import deleteUser from "../../../../assets/deleteUser.png";

import { Container, Image, Content, Body, ButtonSecudary } from "./styles";
import { AuthContext } from "../../../../contexts/UserContext";
import Button from "../../../../components/Button";

function ModalDelete({ setShowModalDelete, user, loading }) {
  const { deleteUsers } = useContext(AuthContext);

  return (
    <Container>
      <Body>
        <Image src={deleteUser} />
        <Content>
          <h1>Você realmente deseja excluir o usuário?</h1>
          <div>
            <ButtonSecudary
              onClick={async () => {
                await deleteUsers(user?.id);
                await loading();
                setShowModalDelete(false);
              }}
            >
              CONFIRMAR
            </ButtonSecudary>
            <Button
              style={{ width: "30%" }}
              onClick={() => setShowModalDelete(false)}
            >
              Não
            </Button>
          </div>
        </Content>
      </Body>
    </Container>
  );
}

export default ModalDelete;
