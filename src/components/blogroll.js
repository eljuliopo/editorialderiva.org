/** @jsx jsx */
import { jsx, Themed, Box } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

export default function Blog({ items }) {
  return (
    <ul
      sx={{
        listStyle: "none",
        mx: "auto",
        px: 0,
        py: 4,
        maxWidth: "blog",
      }}
    >
      {items.map(post => {
        post.slug = "/blog/" + slugify(post.title.toLowerCase())
        return (
          <li
            key={post.id}
            sx={{
              mb: 5,
            }}
          >
            <Themed.h2
              sx={{
                m: 0,
              }}
            >
              <Link
                to={post.slug}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  ":hover,:focus": {
                    color: "primary",
                    textDecoration: "underline",
                  },
                }}
              >
                {post.title}
              </Link>
            </Themed.h2>
            <small sx={{ fontWeight: "bold" }}>{post.date}</small>
            <Themed.p sx={{ mt: 3, position: "relative" }}>
              {post.description}
              <Themed.a
                as={Link}
                to={post.slug}
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: -4,
                }}
              >
                Ir al artículo.
              </Themed.a>
            </Themed.p>
          </li>
        )
      })}
    </ul>
  )
}
