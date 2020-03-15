import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { title, social } = data.site.siteMetadata
  return (
    <footer className="mt-5">
      <hr className="my-5" />
      <div className="text-sm flex-row m-2">
        <div className="my-3">
          <strong>{title}</strong> © {new Date().getFullYear()}, built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <ul className="flex my-2">
          <li className="mr-2">
            <a href={social.twitter}>
              <FaTwitterSquare size="1.2em" />
            </a>
          </li>
          <li className="mr-2">
            <a href={social.linkedin}>
              <FaLinkedin size="1.2em" />
            </a>
          </li>
          <li className="mr-2">
            <a href={social.github}>
              <FaGithubSquare size="1.2em" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
