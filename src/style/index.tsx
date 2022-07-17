import styled from "styled-components";

export const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: white;
  padding: 5px 15px;
  border-radius: 10px;
  margin-top: 5px;
  h1 {
    font-size: 25px;
    font-weight: normal;
  }
  .leftside-wrapper {
    gap: 16px;
    display: flex;
  }
  .button-wrapper {
    display: flex;
    gap: 16px;
  }
`;
