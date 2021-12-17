import styled from "styled-components";

export const Container = styled.section`
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #81ecec;
  align-items: center;
  nav {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
  p {
    text-align: center;
  }
  img {
    width: 5vw;
  }
  @media (max-width: 636px) {
    img {
      width: 10vw;
    }
  }
`;
