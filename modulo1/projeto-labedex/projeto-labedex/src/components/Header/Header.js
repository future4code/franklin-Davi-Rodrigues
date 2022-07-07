import React from 'react'
import AppBar from '@mui/material/AppBar'
import {StyledToolbar} from "./styled"
import Button from '@mui/material/Button'

const Header = () => {

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button color="inherit">Minha Labedex</Button>
                <Button color="inherit">Labedex</Button>
                <Button></Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
