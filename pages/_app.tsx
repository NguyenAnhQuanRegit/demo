import Layout from '@/components/Layout/Layout'
import '@/styles/main.css'
import lightThemeOptions from '@/styles/theme/light-theme-option'
import createEmotionCache from '@/utils/createEmotionCache'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}

const inter = Inter({ subsets: ['latin'] })
const lightTheme = createTheme(lightThemeOptions)
const clientSideEmotionCache = createEmotionCache()

export default function AppLayout({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: ExtendedAppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Survey-HomePage" />
                <meta name="theme-color" content="#ffffff" />
                <title>Survey</title>
            </Head>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <main className={inter.className}>
                        <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </main>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}
