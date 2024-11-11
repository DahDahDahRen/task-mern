import { ThemeProvider } from "@emotion/react";
import GlobalStyled from "./components/styled/GlobalStyle.styled";
import Header from "./components/ui/Header";
import TaskCard from "./components/ui/TaskCard";
import { StyledContainer } from "./components/styled/StyledContainer.styled";
import { StyledGrid } from "./components/styled/StyledGrid.styled";
import { StyledGridBox } from "./components/styled/StyledGridBox.styled";
import { StyledBoxShadow } from "./components/styled/StyledBoxShadow.styled";

const theme = {
  colors: {
    primaryColor: "#0D1B2A",
    secondaryColor: "#FFFFFF",

    accent: {
      accentOne: "#06D6A0",
      accentTwo: "#415A77",
      accentThree: "#778DA9",
      accentFour: "#EF476F",
      accentFive: "#FFD166",
      accentSix: "#06D6A0",
      accentSeven: "#1B263B",
    },
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <StyledContainer>
          <StyledBoxShadow>
            <Header />
            <StyledGrid>
              <StyledGridBox>
                <TaskCard>
                  <p>Task Card</p>
                </TaskCard>
              </StyledGridBox>
              <StyledGridBox>Side bar</StyledGridBox>
            </StyledGrid>
          </StyledBoxShadow>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
