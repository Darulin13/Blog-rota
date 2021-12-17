import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: #81ecec;
  nav {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  h1:hover {
    color: white;
  }
  div {
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  p {
    color: white;
    text-decoration: none;
    border: solid white 3px;
    background-color: black;
  }
  p:hover {
    border: solid;
    color: black;
    background-color: white;
  }
  @media (max-width: 636px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    nav {
      width: 100%;
    }
    div {
      width: 100%;
    }
  }
`;
