import { StyledHeader } from "../styled/StyledHeader.styled";
import { StyledHeaderCircle } from "../styled/StyledHeaderCircle.styled";
import { StyledTaskCounterText } from "../styled/StyledTaskCounterText.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-content">
        <div>
          <StyledHeaderCircle color="#EF476F" />
          <StyledHeaderCircle color="#FFD166" />
          <StyledHeaderCircle color="#06D6A0" />
        </div>

        <div>
          <StyledTaskCounterText>
            <p className="completed-task">0</p>

            <p>Completed Task</p>
          </StyledTaskCounterText>
        </div>
      </div>
    </StyledHeader>
  );
}