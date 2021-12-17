import React from "react";
import * as S from "./styles";
import { graphql, useStaticQuery } from "gatsby";
import GlobalStyle from "./GlobalStyle";
export function Main() {
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
    <S.Container>
      <GlobalStyle />
      <div class="text">
        <h1>{hi}</h1>
        <p>{paragraph}</p>
      </div>
      <S.Projects>
        <h1>{project}</h1>
        <article>
          <div>
            <a href="https://csb-xuccj.netlify.app/">
              <img src={personaimg.url} alt="icon persona " />
            </a>
          </div>
          <div>
            <a href="https://inspiring-shaw-52512e.netlify.app/">
              <img src={taxiimg.url} alt="icon taxi " />
            </a>
          </div>
          <div>
            <a href="https://darulin13.github.io/Trabalho-de-Biologia/">
              <img src={biologiaimg.url} alt="icon biologia " />
            </a>
          </div>
        </article>
      </S.Projects>
    </S.Container>
  );
}
