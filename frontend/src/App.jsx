import { ThemeProvider } from "@emotion/react";
import GlobalStyled from "./components/styled/GlobalStyle.styled";

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
      <GlobalStyled />

      <ThemeProvider theme={theme}>
        <div>Hello World</div>
      </ThemeProvider>
    </>
  );
}

export default App;
