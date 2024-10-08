import { createTheme, ThemeProvider } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "./consts/colors";
import AppNavigator from "./components/others/AppNavigator";
import Footer from "./components/others/Footer";
import Complaints from "./screens/Complaints/screens/Complaints";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "./components/others/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary[500],
      light: COLORS.primary[300],
      dark: COLORS.primary[900],
      contrastText: COLORS.neutral[50]
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "ghost" },
          style: {
            color: COLORS.primary[900]
          }
        }
      ]
    }
  }
});

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const MainContent = styled.main`
  margin-left: 108px;
  width: 100%;
  padding: 110px 120px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PageContainer>
          <Header />
          <MainWrapper>
            <AppNavigator />
            <MainContent>
              <Complaints />
            </MainContent>
          </MainWrapper>
          <Footer />
        </PageContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
