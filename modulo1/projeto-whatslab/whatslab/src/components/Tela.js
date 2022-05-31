import react from "react";
import styled from "styled-components";

const TelaMsg = styled.div`
    background-color: red;
`

function Tela(props) {
    return (
        <TelaMsg>
            <p>{ props.user } { props.msg }</p>
        </TelaMsg>
    );
}

export default Tela;