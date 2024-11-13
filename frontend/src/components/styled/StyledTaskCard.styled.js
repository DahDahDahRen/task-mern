import styled from "@emotion/styled";

export const StyledTaskCard = styled.div`
  padding: 24px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.accent.accentSeven};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .task-card-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: -0.03em;

    margin-bottom: 12px;
  }

  .task-card-description {
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.03em;
  }
`;
