import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shunjid",
    short_name: "Shunjid",
    lang: "en-US",
    start_url: "/",
    display: "standalone",
    theme_color: "#512cd4",
    background_color: "#FFFFFF",
    prefer_related_applications: true,
    icons: [
      {
        src: "Shunjid128.png",
        sizes: "128x128",
        purpose: "any",
      },
      {
        src: "Shunjid144.png",
        sizes: "144x144",
        purpose: "any",
      },
      {
        src: "Shunjid192.png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "Shunjid256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "Shunjid384.png",
        sizes: "384x384",
        purpose: "any",
      },
      {
        src: "Shunjid512.png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
