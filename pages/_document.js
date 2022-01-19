import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getLangFromReq } from '../lighthouse/fromReq'
import { getCsp } from '../lighthouse/csp'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lang = getLangFromReq(ctx.req)
    return { ...initialProps, lang }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta name="Description" content="Build a PWA with Next.js to achieve 100 lighthouse score."></meta>
          <meta name="theme-color" content="#317EFB" />
          <meta name="referrer" content={'strict-origin'} />
          <meta httpEquiv="Content-Security-Policy" content={getCsp(NextScript.getInlineScriptSource(this.props))} />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon-16x16.webp' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.webp' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-touch-icon.webp"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument