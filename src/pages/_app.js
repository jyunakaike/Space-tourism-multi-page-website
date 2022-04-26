import React, {useState} from 'react';
import { Layout } from '../components/Layout'

import './styles.css';

function MyApp({ Component, pageProps }) {

    return (
        <React.Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    )
}

export default MyApp;;