import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "./consts/colors";
import AppNavigator from "./components/general/AppNavigator";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary.default,
      light: COLORS.primary.lighter,
      dark: COLORS.primary.darkest,
      contrastText: COLORS.neutral.white
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "ghost" },
          style: {
            color: COLORS.primary.darkest
          }
        }
      ]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
