"use client"
import { Footer, Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css' 
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext';
import GifLoader from '../components/GifLoader'
import WhatsAppIcon from '../components/WhatsAppIcon';
import { GoogleAnalytics } from '@next/third-parties/google'





export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
    <html className="no-js no-touch supports-no-cookies" lang="en">
      <>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
        <meta content="max-image-preview:large" name="robots" />
        <title>
          sheikh medlej
        </title>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />


        <meta
          content="At sheikh medlej, we're reshaping the way businesses connect."
          name="description"
        />
        <meta content="sheikh medlej" name="keywords" property="trainer, book, author, dedicated, lebanon, kuwait, ksa, syria, jordan" />
        <meta
          content="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png"
          name=""
          property="og:image"
        />

        <meta name="twitter:image" content="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png" />


        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <link href="https://assets.bellroy.com" rel="preconnect" />
        <link href="https://bellroy.imgix.net" rel="preconnect" />
 
<meta property="og:url" content="https://marwanasmar.com/" />
<meta property="og:type" content="website" />
<meta property="og:logo" content="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png" />
        




        <link
          href="css/webfonts-3e3c2400.css"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="css/webfonts-3e3c2400.css"
          media="print"
        />
        <link
          rel="stylesheet"
          href="css/style-4109db2b.css"
        />

        <link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet" />




      </>

      <body>


        <GifLoader />


        <BooleanProvider>
          <CartProvider>
            <Navbar2 />
            <WhatsAppIcon />
            {children}
            {/* <GoogleAnalytics gaId="G-GKVJEXB18C" /> */}
            <Footer />
          </CartProvider>
        </BooleanProvider>

      </body>
    </html>
  )
}
