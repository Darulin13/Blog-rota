import React from "react";
import * as S from "./styles";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import GlobalStyle from "./GlobalStyle";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        headers {
          name
          about
          contact
          home
          projects
        }
      }
    }
  `);
  console.log("teste Header", data);
  const { name, about, contact, home, projects } = data.blogdata.headers[0];
  return (
    <S.Container>
      <GlobalStyle />
      <div>
        <h1>{name}</h1>
      </div>
      <nav>
        <Link to="/">
          <p>{home} </p>
        </Link>

        <Link to="/contact">
          <p>{contact}</p>
        </Link>

        <Link to="/about">
          <p>{about} </p>
        </Link>

        <Link to="/project">
          <p>{projects} </p>
        </Link>
      </nav>
    </S.Container>
  );
}
