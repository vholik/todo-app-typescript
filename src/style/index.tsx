import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: absolute;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  padding: 25px 8px;
  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 2px;
    transition: background 0.1s linear;
    width: 300px;
    cursor: pointer;
    .left {
      display: flex;
      align-items: center;
      img {
        opacity: 0.6;
        width: 28px;
        height: 28px;
      }
    }
    &:hover {
      background-color: rgb(83, 111, 223, 0.1);
    }
    .option-count {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  p {
    margin: 0;
    font-size: 18px;
    margin-left: 12px;
  }
`;
export const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--primary);

  h1 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: normal;
    font-family: "Inter", sans-serif;
  }
  img {
    opacity: 0.6;
  }
  .leftside-wrapper {
    gap: 16px;
    display: flex;
    align-items: center;
    input {
      height: 18px;
      width: 18px;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    .date {
      margin-right: 16px;
      font-size: 14px;
      color: #536fdf;
    }
  }
`;

export const AppWrapper = styled.div`
  padding-top: 25px;
  .no-todos {
    font-size: 32px;
    text-align: center;
    position: absolute;
    top: calc(50% - 39px);
    padding: 0;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
    font-weight: 600;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    display: none;
  }
  .input-wrapper {
    width: 100%;
    position: relative;
    .date-input {
      position: absolute;
      border-radius: 6px;
      top: 12px;
      right: 192.5px;
      outline: none;
      border: none;
      background-color: rgba(0, 0, 0, 0.03);
      padding: 12px 12px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
    #priority-select {
      position: absolute;
      border-radius: 6px;
      top: 12px;
      right: 12px;
      outline: none;
      border: none;
      background-color: rgba(0, 0, 0, 0.03);
      padding: 12px 12px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
    .todo-input {
      font-size: 18px;
      width: 100%;
      outline: none;
      border: none;
      padding: 22.5px 16px;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .todo-add-btn {
    border-radius: 2px;
    font-size: 18px;
  }
  .priority-header {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 25px;
    img {
      width: 25px;
      height: 25px;
    }
    h3 {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary);
      margin: 0px;
    }
    .priority-count {
      margin: 0 0 0 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .chevron {
    margin-right: 8px;
    opacity: 0.6;
  }
`;
