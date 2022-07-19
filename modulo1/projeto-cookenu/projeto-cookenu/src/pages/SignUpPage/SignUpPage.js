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
import { goToLogin, goToRecipeList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

function SignUpPage() {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const cadastrar = () => {
    axios.post(`${BASE_URL}/user/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      goToRecipeList(navigate)
    })
  }

  const onSubmitForm = (evento) => {
    evento.preventDefault();
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
            name="name"
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
          />
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
            onClick={cadastrar}
          >
            Cadastrar
          </Button>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          variant="text"
          margin={"normal"}
          fullWidth
          color="primary"
          onClick={() => goToLogin(navigate)}
        >
          Já possui uma conta? Faça login
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default SignUpPage;
