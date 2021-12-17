import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyle";
export function Footer() {
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
    <S.Container>
       <GlobalStyle />
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
      <div>
        <p>{rights}</p>
        <p>{theme}</p>
      </div>
    </S.Container>
  );
}
