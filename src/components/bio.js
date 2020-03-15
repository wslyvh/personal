import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="block my-3">
      <div className="inline-flex items-center mt-5">
        <div className="text-center m-2">
          <Image
            className="rounded-full"
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
          />
        </div>

        <div className="m-2">
          <div className="text-m font-medium text-gray-900">
            <h1>
              <strong>{author.name}</strong>
            </h1>
          </div>
          <div className="text-sm text-gray-600 mb-2">
            <h2>{author.summary}</h2>
          </div>
          <div className="text-sm flex-row">
            <ul className="flex">
              <li className="mr-2">
                <a href={social.twitter}>
                  <FaTwitterSquare size="1.4em" />
                </a>
              </li>
              <li className="mr-2">
                <a href={social.linkedin}>
                  <FaLinkedin size="1.4em" />
                </a>
              </li>
              <li className="mr-2">
                <a href={social.github}>
                  <FaGithubSquare size="1.4em" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
