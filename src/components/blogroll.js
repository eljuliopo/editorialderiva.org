/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

export default function Blog({ items }) {
  return (
    <ul
      sx={{
        listStyle: "none",
        mx: "auto",
        px: 0,
        // py: 4,
        maxWidth: "blog",
      }}
    >
      {items.map((post, i) => {
        post.slug = "/blog/" + slugify(post.title.toLowerCase())
        return (
          <li
            key={post.id}
            sx={{
              mb: i === items.length - 1 ? null : 5,
            }}
          >
            <Themed.h2 sx={{ m: 0 }}>
              <Themed.a as={Link} to={post.slug}>
                {post.title}
              </Themed.a>
            </Themed.h2>
            <small sx={{ fontWeight: "bold" }}>{post.date}</small>
            <Themed.p sx={{ mt: 3, position: "relative" }}>
              {post.description}{" "}
              <Themed.a as={Link} to={post.slug}>
                Leer artículo
              </Themed.a>
              .
            </Themed.p>
          </li>
        )
      })}
    </ul>
  )
}
