import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #81ecec;
  align-items: center;
  height: 100vh;
  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  article {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    align-items: center;
  }
  p {
    color: white;
    font-size: 40px;
  }
  img {
    border-radius: 50%;
    width: 20%;
  }
  .icon {
    width: 60%;
  }
  @media (max-width: 636px) {
    height: 600vh;
    div {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      background-color: #81ecec;
      align-items: center;
    }
    p {
      text-align: center;
    }
    img {
      width: 50%;
    }
    .icon {
      width: 100%;
    }
  }
`;
export default function About() {
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
  console.log("teste Main", data);
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
      <div>
        <img src={eu.url} alt="foto minha " />
        <article>
          <p>{aboutparagraph}</p>
          <p>{aboutparagraph2}</p>
        </article>
      </div>
      <Link to="/">
        <img src={home.url} class="icon" alt="icon voltar " />
      </Link>
    </Container>
  );
}
