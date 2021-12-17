import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #81ecec;
  align-items: center;
  height: 100vh;
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
    nav {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      flex-wrap: wrap;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
    p {
      text-align: center;
    }
  }
`;
export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        footers {
          home {
            url
          }
          github {
            url
          }
          instagram {
            url
          }
          linkedin {
            url
          }
          rights
          theme
          where
        }
      }
    }
  `);

  const {
    home,
    github,
    instagram,
    linkedin,
    rights,
    theme,
    where
  } = data.blogdata.footers[0];
  console.log("teste footer", data);
  return (
    <Container>
      <GlobalStyle />
      <h1>{where}</h1>
      <nav>
        <a href="https://github.com/Darulin13" rel="external" target="_blank">
          <img src={github.url} alt="icon " />
        </a>
        <a
          href="https://instagram.com/ahhhjoao?utm_medium=copy_link"
          rel="external"
          target="_blank"
        >
          <img src={instagram.url} alt="icon " />
        </a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-f-76981620a"
          rel="external"
          target="_blank"
        >
          <img src={linkedin.url} alt="icon " />
        </a>
      </nav>
      <Link to="/index">
        <img src={home.url} alt="icon voltar " />
      </Link>
    </Container>
  );
}
