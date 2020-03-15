import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Bio />

      <article>
        <header className="mb-5">
          <h3 className="text-gray-800 font-bold text-xl mt-5">
            {post.frontmatter.title}
          </h3>
          <span className="text-gray-600">{post.frontmatter.date}</span>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <div className="grid grid-cols-2 my-5">
        <div className="text-left">
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className="text-sm">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link to={next.fields.slug} rel="next" className="text-sm">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
      }
    }
  }
`
