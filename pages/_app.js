import * as React from 'react';
//import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
//import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

const theme = createTheme();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Provider store={store}>
                <CacheProvider value={emotionCache}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </CacheProvider>
            </Provider>
        </>
    );
}

export default MyApp;
