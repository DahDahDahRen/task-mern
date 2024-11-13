import { ThemeProvider } from "@emotion/react";
import GlobalStyled from "./components/styled/GlobalStyle.styled";
import Header from "./components/ui/Header";
import TaskCard from "./components/ui/TaskCard";
import { StyledContainer } from "./components/styled/StyledContainer.styled";
import { StyledGrid } from "./components/styled/StyledGrid.styled";
import { StyledGridBox } from "./components/styled/StyledGridBox.styled";
import { StyledBoxShadow } from "./components/styled/StyledBoxShadow.styled";
import { StyledTasksList } from "./components/styled/StyledTasksList.styled";
import { useState, useEffect } from "react";
import { fetchTasks } from "./service/service";

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
  //* APP State
  const [tasks, setTasks] = useState([]);

  //* App Effect
  useEffect(() => {
    //* Make an API Call
    const connectToAPI = async () => {
      const tasks = await fetchTasks();

      setTasks(tasks);
    };

    connectToAPI();
  }, []);

  console.log(tasks);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <StyledContainer>
          <StyledBoxShadow>
            <Header />

            <StyledGrid>
              <StyledGridBox>
                <StyledTasksList>
                  {tasks.length === 0 ? (
                    <p>Start Adding Task</p>
                  ) : (
                    tasks.map((task) => (
                      <TaskCard key={task._id}>
                        <div>
                          <p className="task-card-title">{task.title}</p>
                          <p className="task-card-description">
                            {task.description}
                          </p>
                        </div>
                      </TaskCard>
                    ))
                  )}
                </StyledTasksList>
              </StyledGridBox>

              <StyledGridBox>
                <p>Input Side Bar</p>
              </StyledGridBox>
            </StyledGrid>
          </StyledBoxShadow>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
