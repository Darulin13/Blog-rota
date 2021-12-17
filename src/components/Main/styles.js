import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  div {
    align-self: start;
  }
`;
export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: solid;
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 20%;
  }
  img {
    width: 80%;
    height:30vh;
  }
  @media (max-width: 636px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    article {
      display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: #81ecec;
    border:  none;
    }
    img{
      width: 100%;
    }
    div {
      background-color: #81ecec;
      align-items: center;
      width: 100%;
      border:  none;
      align-items: center;
    }
`;
