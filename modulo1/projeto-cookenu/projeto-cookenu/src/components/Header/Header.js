import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToRecipeList, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
            <Button color="inherit" onClick={() => goToRecipeList(navigate)}>Cookenu</Button>
            <Button color="inherit" onClick={() => goToLogin(navigate)}>Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
