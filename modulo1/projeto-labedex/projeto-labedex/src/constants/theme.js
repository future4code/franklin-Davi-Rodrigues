import { createTheme } from '@mui/material/styles'
import {primaryColor, neutralColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: "#000000"
    },
    secondary: {
      main: "#f000"
    }
  }
})

export default theme 