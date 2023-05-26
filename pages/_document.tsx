import createEmotionCache from '@/utils/createEmotionCache'
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Children } from 'react'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="icon"
                        type="image/png"
                        href="/favicon96.png"
                    />
                </Head>
                <body className="loading">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;
  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <App
            {...props} // @ts-ignore
            emotionCache={cache}
          />
        ),
    });

  const initialProps = await Document.getInitialProps(ctx)
  // This code prevents emotion from rendering invalid HTML.
  // It is a part of the work around for a bug in material-ui that caused it to render invalid HTML when using emotion.
  // This code ensures that any HTML sent through emotion is sanitized and only valid HTML is rendered.
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => {
    return (
      <style
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
      />
    );
  });

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
}

export default MyDocument
