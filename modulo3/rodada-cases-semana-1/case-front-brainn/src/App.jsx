import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme/theme";
import Sidebar from "./images/Sidebar.svg";
import Logo from "./images/Logo_Sena.png";
import styled from "styled-components";
import Arrow from "./images/arrow.png"


const Image = styled.img`
  max-height: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
`

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  background: none;
  border: none;
  width: 100%;
  font-size: 15px;
  text-transform: uppercase;
`

const SelectDiv = styled.div`
margin-top: 20px;
  max-width: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff url(${Arrow}) 95.5% 50% no-repeat;
  border-radius: 10px;
`

const ContestTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
`

const Contest = styled.p`
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: `url(${Sidebar})`,
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
          <SelectDiv>
          <Select name="" id="">
            <option value="mega">Mega-sena</option>
          </Select>
          </SelectDiv>
        </form>
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
          <Title>Mega-Sena</Title>
        </Box>

       <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px'}}>
          <ContestTitle>Concurso</ContestTitle>
          <Contest>4531 – 07/04/2020</Contest>
       </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
