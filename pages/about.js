import React from 'react';
import Layout from '../components/MyLayout.js';

export default class About extends React.Component {
    static async getInitialProps() {
        return {}
    }

    render() {
        return (
            <Layout>
                <div>
                    <p>This is the about page</p>
                </div>
            </Layout>
        )
    }
};