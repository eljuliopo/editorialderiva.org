/** @jsx jsx */
import { jsx, Themed, Card, Button } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"
import { toast } from "react-hot-toast"
// import { parseAuthors } from "../utils"
import { useCart } from "../store"

export function Image({ data, ...props }) {
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <GatsbyImage
        image={data.gatsbyImageData}
        sx={{
          height: 300,
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
          Ver detalles
        </Themed.h4>
      </div>
    </div>
  )
}

export default function Item({ data }) {
  const { addToCart } = useCart()
  return (
    <Card>
      <Link to={"/catalogo/" + slugify(data.title.toLowerCase())}>
        <Image
          data={data.image}
          alt={data.title}
          overlay={data.title}
          objectFit="cover"
          sx={{ height: "auto" }}
        />
      </Link>

      <div sx={{ p: 2 }}>
        <Themed.h4 sx={{ variant: "text.truncate" }}>
          <Themed.a
            as={Link}
            to={"/catalogo/" + slugify(data.title.toLowerCase())}
          >
            {data.title}
          </Themed.a>
        </Themed.h4>
        <Themed.p sx={{ variant: "text.truncate" }}>{data.authors[0]}</Themed.p>
        <Themed.p sx={{ variant: "text.truncate" }}>${data.price}</Themed.p>
        <Button
          sx={{ width: "100%" }}
          onClick={() => {
            addToCart({ ...data, quantity: 1 })
            toast.success(data.title + " agregado al carro")
          }}
        >
          Agregar al carro
        </Button>
      </div>
    </Card>
  )
}
