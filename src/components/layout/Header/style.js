import styled from "styled-components";

export default styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;

  .headerMenu {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 20px;
      li {
        margin-right: 25px;
        cursor: pointer;
        list-style-type: none;
      }
    }
  }
`;
