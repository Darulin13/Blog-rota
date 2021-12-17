import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #81ecec;
  justify-content: space-evenly;
  height: 100vh;
  h1:hover {
    color: white;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  div {
    border: solid;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 20vw;
    height: 30vh;
    border: black solid;
    border-top: none;
  }
  p:hover {
    color: white;
  }
  .icon {
    width: 60%;
  }
  @media (max-width: 636px) {
    display: flex;
    height: 300vh;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    div {
      border: solid;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 40vw;
      border: black solid;
    }
    .icon {
      width: 20vw;
    }
  }
`;

export default function Project() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        mains {
          about
          aboutparagraph
          aboutparagraph2
          biologiaimg {
            url
          }
          css
          eu {
            url
          }
          hi
          gatsby
          html
          home {
            url
          }
          project
          paragraph
          personaimg {
            url
          }
          react
          taxiimg {
            url
          }
        }
      }
    }
  `);
  console.log("teste project", data);
  const {
    about,
    aboutparagraph,
    aboutparagraph2,
    biologiaimg,
    css,
    eu,
    hi,
    gatsby,
    html,
    home,
    project,
    paragraph,
    personaimg,
    react,
    taxiimg
  } = data.blogdata.mains[0];
  return (
    <Container>
      <GlobalStyle />
      <h1>{project}</h1>
      <Projects>
        <div>
          <a target="_blank" href="https://csb-xuccj.netlify.app/">
            <img src={personaimg.url} alt="icon persona " />
          </a>
          <nav>
            <p>{react}</p>
            <p>{gatsby}</p>
          </nav>
        </div>

        <div>
          <a target="_blank" href="https://inspiring-shaw-52512e.netlify.app/">
            <img src={taxiimg.url} alt="icon taxi " />
          </a>
          <nav>
            <p>{react}</p>
            <p>{gatsby}</p>
          </nav>
        </div>
        <div>
          <a
            target="_blank"
            href="https://darulin13.github.io/Trabalho-de-Biologia/"
          >
            <img src={biologiaimg.url} alt="icon biologia " />
          </a>
          <nav>
            <p>{html}</p>
            <p>{css}</p>
          </nav>
        </div>
      </Projects>
      <Link to="/index">
        <img class="icon" src={home.url} alt="icon voltar " />
      </Link>
    </Container>
  );
}
