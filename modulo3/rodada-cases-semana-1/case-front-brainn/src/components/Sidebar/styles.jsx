import styled from "styled-components";
import Arrow from "../../images/arrow.png"

export const Image = styled.img`
  max-height: 50px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  background: none;
  border: none;
  width: 100%;
  font-size: 15px;
  text-transform: uppercase;
`

export const SelectDiv = styled.div`
margin-top: 20px;
  max-width: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff url(${Arrow}) 95.5% 50% no-repeat;
  border-radius: 10px;
`

export const ContestTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
`

export const Contest = styled.p`
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
`