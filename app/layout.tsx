import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tumininu Aiyegbusi — Web3 Frontend Developer & AI Builder",
  description: "Tumininu Aiyegbusi is a Web3 frontend developer and AI-assisted builder creating interactive digital products, dApps and modern technology experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Tumininu Aiyegbusi — Web3 Frontend Developer & AI Builder",
    description: "Web3 frontend development, AI-assisted building and creative technology.",
    type: "website",
    images: [{url:"/og-image.png", width:1024, height:1536, alt:"Tumininu Aiyegbusi"}]
  },
  twitter: { card:"summary_large_image", title:"Tumininu Aiyegbusi — Web3 Frontend Developer & AI Builder", images:["/og-image.png"] },
  icons: { icon:"/og-image.png" }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}