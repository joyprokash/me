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
            <meta name="description" content="Five plus years of experience in Backend Development  Experienced with all stages of the development cycle for Software projects. Well-versed in numerous programming languages including JavaScript, SQL, JQuery and PHP, ReactJs. Strong background in project management and SDLC. Sound Knowledge on Famous PHP & JavaScript Frameworks (Laravel, Yii2, Cake PHP, NextJs) ." />
            <meta name="keywords" content="HTML,CSS,XML,JavaScript,php,web development,web developer,software, software developer,Link3 Technologies,link3,joy,joyprokash,joyprokash chakraborty,Angularjs,nodejs" />
            <meta name="author" content="Joyprokash Chakrabarty" />
            <link rel="stylesheet" type="text/css"  href="css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.css" />
            <link rel="stylesheet" type="text/css"  href="css/style.css" />
            <link href='https://fonts.googleapis.com/css?family=Lato:400,700,900,300' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300' rel='stylesheet' type='text/css' />
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