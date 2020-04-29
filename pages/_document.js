import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Joyprokash - Backend || Laravel || NextJS || React Developer</title>
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link rel="stylesheet" type="text/css"  href="css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
            <link rel="stylesheet" type="text/css"  href="css/style.css" />
            <link href='http://fonts.googleapis.com/css?family=Lato:400,700,900,300' rel='stylesheet' type='text/css' />
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300' rel='stylesheet' type='text/css' />
        </Head>
        <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument