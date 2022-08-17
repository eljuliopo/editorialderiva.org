/** @jsx jsx */
import { jsx, Themed, Divider } from "theme-ui"
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
              <Link to={post.slug} sx={t => t.styles.a}>
                {post.title}
              </Link>
            </Themed.h2>
            <small sx={{ fontWeight: "bold" }}>por {post.author}, {post.date}</small>
            <Themed.p sx={{ mt: 3, position: "relative" }}>{post.description} </Themed.p>
            <p sx={{ textAlign: "right" }}>
              <Link to={post.slug} sx={t => t.styles.a} >
                🔍 Leer nota
              </Link>
              <Divider />
            </p>
         </li>
        )
      })}
    </ul>
  )
}
