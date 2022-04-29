import styled from "styled-components";

export default styled.div`
  width: 250px;
  /* border: solid 3px lightblue; */
  padding: 10px;
  background-color: lightblue;
  margin: 20px;
  position: relative;

  .headerOfArticle {
    /* border: solid 1px black; */
    display: flex;
    justify-content: flex-end;
    img {
      margin: 5px;
      cursor: pointer;
      width: 15px;
      height: 15px;
    }
  }
  .bodyOfArticle {
    h3 {
      font-weight: normal;
      cursor: pointer;
    }
  }

  .footerOfArticle {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
  }
`;
