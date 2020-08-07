import styled from "styled-components";

export const StyledTodo = styled.li`
  border-bottom: 1px solid #aaa;
  padding: 3px;
  &:nth-child(odd) {
    background: #ccc;
  }
`;
