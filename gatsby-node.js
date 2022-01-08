const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query xoxo {
      allContentfulBlogPost(sort: { order: DESC, fields: date }) {
        nodes {
          id
          title
          date(formatString: "D MMMM YYYY", locale: "es")
          description
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.nodes

  posts.map(async (blogPost, index) => {
    const isLast = index === posts.length - 1
    const prev = isLast ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    createPage({
      path: "/blog/" + slugify(blogPost.title, { lower: true }),
      component: require.resolve("./src/templates/blogPost"),
      context: {
        ...blogPost,
        type: "blogPost",
        prev,
        next,
      },
    })
  })
}
