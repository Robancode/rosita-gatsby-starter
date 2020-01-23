/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import linkedIn from "../../content/assets/linkedin-logo.svg"
import { rhythm } from "../utils/typography"
import profilePic from "../../content/assets/crop.jpg"
import github from "../../content/assets/GitHub-Mark-32px.png"
import email from "../../content/assets/mail-black-envelope-symbol.svg"
import "../index.less"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div>
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(1.0),
              }}
            >
              <p>
                Hi, I'm <strong>{author}</strong>, a London based, self-taught
                web developer finding my way in the javascript world. Currently
                working for{" "}
                <a
                  style={{ textDecoration: "none", color: "#07e" }}
                  href="https://www.concentra.co.uk/"
                >
                  Concentra Analytics
                </a>{" "}
                as a UX designer. Previously worked for{" "}
                <a
                  href="https://grantadesign.com/"
                  style={{ textDecoration: "none", color: "#07e" }}
                >
                  Granta Design
                </a>{" "}
                and{" "}
                <a
                  href="https://www.soma-analytics.com/"
                  style={{ textDecoration: "none", color: "#07e" }}
                >
                  SOMA Analytics
                </a>
                . <br /> <br />
                Currently up-skilling on react and open to new opportunities.
                Here's a link to my
                <a href="https://docs.google.com/document/d/1jCpEJ7_nN_f2aKDazYTKZwVV-u6hKaLd_y9bJGHkhgY/edit?usp=sharing">
                  {" "}
                  CV.
                </a>
              </p>
            </div>
            <div
              style={{
                margin: `${rhythm(1.5)} 0`,
                width: "100%",
              }}
            ></div>
            <footer style={{ textAlign: "center" }}>
              <a
                href="https://www.linkedin.com/in/rosita-bannert/"
                style={{
                  boxShadow: "none",
                }}
              >
                <img
                  src={linkedIn}
                  style={{
                    maxWidth: "16px",
                    margin: "0px",
                    marginRight: "16px",
                  }}
                />
              </a>

              <a
                href="https://www.github.com/Robancode"
                style={{ boxShadow: "none" }}
              >
                <img
                  src={github}
                  style={{
                    maxWidth: "16px",
                    margin: "0px",
                    marginRight: "16px",
                  }}
                />
              </a>
              <a
                href="mailto:rositabannert@hotmail.co.uk"
                style={{ boxShadow: "none" }}
              >
                <img src={email} style={{ maxWidth: "16px", margin: "0px" }} />
              </a>
            </footer>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic-2.jpg/" }) {
      childImageSharp {
        sizes(maxWidth: 180, quality: 75) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
