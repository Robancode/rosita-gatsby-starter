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
import profilePic from "../../content/assets/profile-pic.jpg"

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
                Written by <strong>{author}</strong>, a London based,
                self-taught Web Developer finding her way in the javascript
                world. Currently working for{" "}
                <a
                  style={{ boxShadow: "none" }}
                  href="https://www.concentra.co.uk/"
                >
                  Concentra Analytics
                </a>
                . Previously worked for{" "}
                <a
                  href="https://grantadesign.com/"
                  style={{ boxShadow: "none" }}
                >
                  Granta Design
                </a>{" "}
                and{" "}
                <a
                  href="https://www.soma-analytics.com/"
                  style={{ boxShadow: "none" }}
                >
                  SOMA Analytics
                </a>
                . <br /> <br />
                Constantly developing my javascript and React skills and open to
                new opportunities.
              </p>
            </div>
            <div
              style={{
                margin: rhythm(1.5),
              }}
            >
              <img
                src={profilePic}
                style={{
                  maxWidth: "360px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  marginBottom: "0px",
                }}
                alt="Rosita smiles"
              />{" "}
              <div
                style={{
                  padding: "none",
                  margin: "none",
                  textAlign: "center",
                }}
              >
                Rosita on a rock
              </div>
            </div>
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
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
              />
            </a>
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
