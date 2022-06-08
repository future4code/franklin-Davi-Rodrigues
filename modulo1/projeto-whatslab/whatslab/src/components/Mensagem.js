import react from "react";
import styled from "styled-components";

const AreaMsg = styled.div`
  width: 100%;
  display: flex;
  .userMsg {
    justify-content: flex-end;
  }
`

const MsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: white;
  max-width: 70%;
  width: max-content;
  padding: 5px 15px;
  border-radius: 10px;
`
const User = styled.p`
  font-weight: bold;
  margin: 5px;
  color:  purple;
  /* &:after {
    content: ":";
  } */
`
const Msg = styled.p`
  margin: 0 5px;
`

function Mensagem(props) {
  return (
    <AreaMsg>
      <MsgDiv>
          <User>{props.user}</User>
          <Msg>{props.msg}</Msg>
      </MsgDiv>
    </AreaMsg>
  );
}

export default Mensagem;
