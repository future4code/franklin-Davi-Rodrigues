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
} from "./styles";
import { useRequestData } from "../../hooks/useRequestData";
import { useState } from "react";
import { colors } from "../../constants/constants";
import { Number } from "../Number/Number";

export const Sidebar = () => {
  const [loteriaAtual, setLoteriaAtual] = useState(0);
  const loterias = useRequestData([], "loterias");
  const concursos = useRequestData([], "loterias-concursos");
 


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
    <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#EFEFEF'}}>
    <Box
      sx={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='613' height='1080' viewBox='0 0 613 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z' fill='%23${colors[loteriaAtual].color}'/%3E%3C/svg%3E%0A")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
        minWidth: '500px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "60px",
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <Image src={Logo} />
        <Title>{showName()}</Title>
      </Box>}

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
    </Box>
    <Box sx={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {detalheConcurso?.numeros && 
            detalheConcurso.numeros.map((numero) => <Number key={numero} numero={numero} />)
        }
    </Box>
    </Box>
  );
};
