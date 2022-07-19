import React from "react";
import {
  ScreenContainer,
  LogoImage,
  InputsContainer,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@mui/material";
import { goToRecipeList, goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function LoginPage() {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const login = () => {
    axios.post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToRecipeList(navigate)
    })
    .catch((err) => {
      console.log(err)
        alert("Algo deu errado")
    })
  }

  const onSubmitForm = (evento) => {
    evento.preventDefault();
    login()
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name="email"
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            type={"email"}
            required
          />
          <TextField
            name="password"
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            type={"password"}
            required
          />

          <Button
            type="submit"
            variant="contained"
            margin={"normal"}
            fullWidth
            color="primary"
          >
            Fazer Login
          </Button>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          variant="text"
          margin={"normal"}
          fullWidth
          color="primary"
          onClick={() => goToSignUp(navigate)}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;
