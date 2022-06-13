import styled from "styled-components";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Final() {
  return (
    <Tela>
      <h2>O FORMULÁRIO ACABOU</h2>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Tela>
  );
}

export default Final;
