import { Box } from "@mui/material";
import SidebarSvg from "../../images/Sidebar.svg";
import Logo from "../../images/Logo_Sena.png";
import {
  Image,
  Title,
  Select,
  SelectDiv,
  Contest,
  ContestTitle,
  SidebarContainer,
  Container,
  TitleContainer,
  NumberContainer,
} from "./styles";
import { useRequestData } from "../../hooks/useRequestData";
import { useState } from "react";
import { colors } from "../../constants/constants";
import { Number } from "../Number/Number";
import { svgBackground } from "../../utils/svgBackground";

export const Sidebar = () => {
  const [loteriaAtual, setLoteriaAtual] = useState(0);
  const loterias = useRequestData([], "loterias");
  const concursos = useRequestData([], "loterias-concursos");

  const isMobile = window.screen.width < 524
 

  const onChangeLoteria = (event) => {
    setLoteriaAtual(event.target.value);
  };

  const getConcursoId = () => {
    const result = concursos.find((concurso) => concurso.loteriaId == loteriaAtual)
    return result?.concursoId
  }

  const showName = () => {
    const result = loterias.find((loteria) => loteria?.id == loteriaAtual);
    console.log(result?.nome);
    return result?.nome;
  };

  const showDate = (date) => {
    if(date){
        let result = date.split('T')
        result = new Date(result[0])
        result = new Intl.DateTimeFormat('pr-BR').format(result)
        return result
    } else {
        return date
    }
  }

  const detalheConcurso = useRequestData({}, `concursos/${getConcursoId()}`)

  
  return (
    <Container>
    <SidebarContainer bg={svgBackground(colors[loteriaAtual].color)} bgMobile={svgBackground(colors[loteriaAtual].color, true)} >
      <form action="">
        {loterias && (
          <SelectDiv>
            <Select onChange={onChangeLoteria}>
              {loterias.map((loteria) => (
                <option key={loteria.id} value={loteria.id}>
                  {loteria.nome}
                </option>
              ))}
            </Select>
          </SelectDiv>
        )}
      </form>
      {loterias &&
      <TitleContainer>
        <Image src={Logo} />
        <Title>{showName()}</Title>
      </TitleContainer>}
      
      {!isMobile ?
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <ContestTitle>Concurso</ContestTitle>
        {loterias && concursos[0]?.concursoId &&
        <>
        <Contest>{getConcursoId()} - {showDate(detalheConcurso.data)}</Contest>
        </>}
      </Box>
      :
      <ContestTitle>Concurso Nº {getConcursoId()}</ContestTitle>
    }
      </SidebarContainer>
    <NumberContainer>
        {detalheConcurso?.numeros && 
            detalheConcurso.numeros.map((numero) => <Number key={numero} numero={numero} />)
        }
    </NumberContainer>
    </Container>
  );
};
