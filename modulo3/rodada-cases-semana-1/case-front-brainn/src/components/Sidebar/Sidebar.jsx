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

export const Sidebar = () => {
  const [loteriaAtual, setLoteriaAtual] = useState(0);
  const loterias = useRequestData([], "loterias");
  const [name, setName] = useState("");

  const onChangeLoteria = (event) => {
    setLoteriaAtual(event.target.value);
  };

  const showName = () => {
    const result = loterias.find((loteria) => Number(loteria?.id) === Number(loteriaAtual));
    return result?.nome;
  };

  
  console.log(SidebarSvg);
  return (
    <Box
      sx={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='613' height='1080' viewBox='0 0 613 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z' fill='%23${colors[loteriaAtual].color}'/%3E%3C/svg%3E%0A")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
        width: "50%",
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
        <Contest>4531 – 07/04/2020</Contest>
      </Box>
    </Box>
  );
};
