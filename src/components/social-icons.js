/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

export default function SocialIcons() {
  return (
    <div sx={{ mx: "auto", display: "flex" }}>
      <a href="https://www.facebook.com/editoderiva/" target="_blank" rel="noreferrer">
        <StaticImage src="../images/icons/facebook.png" width={20} quality={100} formats={["AUTO", "WEBP", "AVIF"]} alt={"Facebook"} sx={{ mx: 2, my: "auto" }} />
      </a>
      <a href="https://www.instagram.com/editorial_deriva/" target="_blank" rel="noreferrer">
        <StaticImage src="../images/icons/instagram.png" width={20} quality={100} formats={["AUTO", "WEBP", "AVIF"]} alt={"Instagram"} sx={{ mx: 2, my: "auto" }} />
      </a>
      <a href="https://www.youtube.com/channel/UC_z9i4keVEGH_rE1oP1ouMw" target="_blank" rel="noreferrer">
        <StaticImage src="../images/icons/youtube.png" width={20} quality={100} formats={["AUTO", "WEBP", "AVIF"]} alt={"Youtube"} sx={{ mx: 2, my: "auto" }} />
      </a>
    </div>
  )
}
