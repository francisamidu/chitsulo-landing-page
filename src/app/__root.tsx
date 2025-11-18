import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "./globals.css?url";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        description:
          "Expert welding and metal fabrication for gates, burglar bars, steel furniture, and custom solutions. Professional craftsmanship since 1970.",
      },
      {
        keywords: [
          "welding",
          "metal fabrication",
          "gates",
          "burglar bars",
          "steel furniture",
          "custom metalwork",
        ],
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Chitsulo Fabricators | Custom Metal Fabrication & Welding" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
