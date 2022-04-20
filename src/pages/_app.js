import React, {useState} from 'react';
import { Layout } from '../components/Layout'

import './styles.css';

function MyApp({ Component, pageProps }) {
    // const [nav, setNav] = useState();



    return (
        <React.Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    )
}

export default MyApp;;