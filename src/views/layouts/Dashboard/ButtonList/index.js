import React from "react";

import { Container } from "./styles";

function ButtonList({ icon: Icon, isActive, title, ...rest }) {
  return (
    <Container isActive={isActive} {...rest}>
      {Icon && <Icon size={25} style={{ marginRight: 15 }} />}
      {title}
    </Container>
  );
}

export default ButtonList;
