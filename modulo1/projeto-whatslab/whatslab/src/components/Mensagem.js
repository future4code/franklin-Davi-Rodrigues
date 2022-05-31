import react from "react";
import styled from "styled-components";

const User = styled.h3`
  &:after {
    content: ":";
  }
`;

function Mensagem({ props }) {
  return (
    <div>
      {
      props.map((item, index) => (
          <User key={index}>{item.user}</User>
      ))
      }
    </div>
  );
}

export default Mensagem;
