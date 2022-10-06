import styled from "styled-components";
import Arrow from "../../images/arrow.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #EFEFEF;

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

`

export const Image = styled.img`
  max-height: 50px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  @media (max-width: 524px) {
    margin: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  width: 100%;
  font-size: 15px;
  text-transform: uppercase;
`;

export const SelectDiv = styled.div`
  margin-top: 20px;
  max-width: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff url(${Arrow}) 95.5% 50% no-repeat;
  border-radius: 10px;
`;

export const ContestTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Contest = styled.p`
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
`;

export const SidebarContainer = styled.div`
  background-image: url("${(props) => props.bg}");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;

  @media (max-width: 524px) {
    background-image: url("${(props) => props.bgMobile}");
    background-position: center;
    height: 50vh;
    min-width: 100vw;
    align-items: center;
    padding: 0;
    justify-content: flex-start;
    gap: 60px
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 524px) {
    gap: 25px;
  }
`
