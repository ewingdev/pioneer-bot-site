import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Pioneer Bot ile kendi çalma listenizi oluşturun, bu keyfi en iyi kaliteli yaşayın."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ewingbaba" />
          <meta name="twitter:creator" content="@ewingbaba" />
          <meta property="og:url" content="https://pioneer-bot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pioneer Bot" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Pioneer Bot ile kendi çalma listenizi oluşturun, bu keyfi en iyi kaliteli yaşayın."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Pioneer Bot" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Pioneer Bot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
