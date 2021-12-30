/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

export function PostListA1({ posts }) {
  return (
    <ul
      sx={{
        listStyle: "none",
        m: 0,
        px: 3,
        py: 4,
        maxWidth: "blog",
        mx: "auto",
      }}
    >
      {posts.map(post => (
        <li
          key={post.id}
          sx={{
            mb: 4,
          }}
        >
          <Themed.h2
            sx={{
              m: 0,
            }}
          >
            <Themed.a
              as={Link}
              to={"/blog/" + slugify(post.title.toLowerCase())}
            >
              {post.title}
            </Themed.a>
          </Themed.h2>
          <small sx={{ fontWeight: "bold" }}>{post.date}</small>
          <Themed.p>{post.description}</Themed.p>
        </li>
      ))}
    </ul>
  )
}

export function PostListA2({ posts }) {
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
        m: 0,
        px: 3,
        py: 4,
        maxWidth: "blog",
        mx: "auto",
      }}
    >
      {posts.map(post => (
        <li key={post.id} sx={{}}>
          <Themed.h2
            sx={{
              m: 0,
            }}
          >
            <Themed.a
              as={Link}
              to={"/blog/" + slugify(post.title.toLowerCase())}
            >
              {post.title}
            </Themed.a>
          </Themed.h2>
          <small sx={{ fontWeight: "bold" }}>{post.date}</small>
          <Themed.p
            sx={{
              m: 0,
            }}
          >
            {post.description}
          </Themed.p>
        </li>
      ))}
    </ul>
  )
}
