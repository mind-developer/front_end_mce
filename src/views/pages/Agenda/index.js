import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../../../components/Button";

import { Container, Content, Time, ButtonSecundary } from "./styles";

function Agenda() {
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <Container>
      <header>
        <button>
          <MdChevronLeft size={36} />
        </button>
        <strong>31 maio</strong>
        <button>
          <MdChevronRight size={36} />
        </button>
      </header>
      <ul>
        {horarios?.map((num) => (
          <Content>
            <div>{num}h</div>
            <Time>
              <ButtonSecundary isActive>Disponivel</ButtonSecundary>

              <ButtonSecundary isActive={false}>Não disponivel</ButtonSecundary>
            </Time>
          </Content>
        ))}
      </ul>
    </Container>
  );
}

export default Agenda;
