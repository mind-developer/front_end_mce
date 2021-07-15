import React, { useState, useEffect } from "react";
import { RiToolsFill, RiCloseCircleLine } from "react-icons/ri";
// import ModalDelete from "../../../components/ModalDelete";
// import ModalEdit from "../../../components/ModalEdit";
import api from "../../../services/api";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

import { Container, Content } from "./styles";

function ListagemUser() {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  const loadingUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadingUsers();
  }, []);

  return (
    <>
      {showModalEdit && (
        <ModalEdit
          setShowModalEdit={setShowModalEdit}
          user={userSelected}
          loading={loadingUsers}
        />
      )}
      {showModalDelete && (
        <ModalDelete
          setShowModalDelete={setShowModalDelete}
          user={userSelected}
          loading={loadingUsers}
        />
      )}

      <Container border="1">
        <tr>
          <td>#</td>
          <td>Nome</td>
          <td>Cpf</td>
          <td>E-mail</td>
          <td>Acesso</td>
          <td>Nivel</td>
          <td>Ações</td>
        </tr>
        {users?.map((user) => (
          <Content>
            <td>{user?.id}</td>
            <td>{user?.nome}</td>
            <td>{user?.cpf}</td>
            <td>{user?.email}</td>
            <td>{user?.acesso}</td>
            <td>{user?.nivel}</td>
            <td>
              <button
                onClick={() => {
                  setShowModalEdit(true);
                  setUserSelected(user);
                }}
              >
                <RiToolsFill size={30} />
              </button>
              <button
                onClick={() => {
                  delete user.senha;
                  setShowModalDelete(true);
                  setUserSelected(user);
                }}
              >
                {" "}
                <RiCloseCircleLine size={30} />
              </button>
            </td>
          </Content>
        ))}
      </Container>
    </>
  );
}

export default ListagemUser;
