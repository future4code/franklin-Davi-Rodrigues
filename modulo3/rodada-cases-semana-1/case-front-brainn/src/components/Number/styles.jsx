import styled from "styled-components";

export const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 27px;

  @media (max-width: 524px) {
    width: 70px;
    height: 70px;
  }
`;
