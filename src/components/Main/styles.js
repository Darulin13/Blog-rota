import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10vh;
  justify-content: space-evenly;

  div {
    align-self: start;
    width: 100%;
  }
  p {
    font-size: 30px;
  }
  h1 {
    font-size: 40px;
  }
  .text {
    background-color: #81ecec;
    width: 100%;
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
    
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 30%;
  }
  
  img {
    width: 100%;
    height:30vh;
  }
  @media (max-width: 636px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 10vh;
    article {
      display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
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
