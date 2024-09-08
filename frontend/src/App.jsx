import { createTheme, ThemeProvider } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "./consts/colors";
import AppNavigator from "./components/others/AppNavigator";
import Footer from "./components/others/Footer";
import Complaints from "./screens/Complaints/screens/Complaints";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary.default,
      light: COLORS.primary.light,
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
      <PageContainer>
        <MainWrapper>
          <AppNavigator />
          <MainContent>
            <Complaints />
          </MainContent>
        </MainWrapper>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
