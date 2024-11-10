import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  width: 1120px;
  padding: 16px 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent.accentThree};

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
