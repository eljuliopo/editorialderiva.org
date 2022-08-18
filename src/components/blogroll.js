/** @jsx jsx */
import { jsx, Themed, Divider } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

export function Image({ data, ...props }) {
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        cursor: "pointer",
        filter: "grayscale(0.01)",
        mt: 2,
        mb: 2,
      }}
    >
      <GatsbyImage
        image={data.gatsbyImageData}
        sx={{
          height: 200,
          transition: "all .48s" /* Animation */,
          ":hover": { transform: "scale(1.1)" },
          ":hover~.overlay": { opacity: 1 },
        }}
        {...props}
      />
      <div
        className="overlay"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          transition: "all .48s" /* Animation */,
          bg: "rgba(0,0,0,0.48)",
          opacity: 0,
          display: "flex",
          cursor: "pointer",
        }}
      >
        <Themed.h4
          sx={{
            color: "background",
            m: "auto",
            p: 2,
            border: theme => `2px solid ${theme.colors.background}`,
          }}
        >
          Leer nota
        </Themed.h4>
      </div>
    </div>
  )
}


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
              <Link to={"/blog/" + slugify(post.title.toLowerCase())}>
                <Image
                  data={post.image}
                  alt={post.title}
                  overlay={post.title}
                  objectFit="cover"
                  sx={{ height: "600" }}
                />
              </Link>
              <Themed.h2 sx={{ m: 0 }}>
                <Link to={post.slug} sx={t => t.styles.a}>
                  {post.title}
                </Link>
              </Themed.h2>
              <small sx={{ fontWeight: "bold", fontSize: "1.03em" }}>✎ por {post.author} / {post.date}</small>
              <Themed.p sx={{ mt: 3, position: "relative" }}>{post.description} </Themed.p>
              <p sx={{ textAlign: "right" }}>
                <Link to={post.slug} sx={t => t.styles.a} >
                  
                </Link>
                <Divider />
              </p>
         </li>
        )
      })}
    </ul>
  )
}
