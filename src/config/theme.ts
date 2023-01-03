import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DDFFF7",
    },
    secondary: {
      main: "#FFD2FC",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
