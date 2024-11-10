import styled from "@emotion/styled";

export const StyledHeaderCircle = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`;
