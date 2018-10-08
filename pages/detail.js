import React from 'react';
import Layout from '../components/MyLayout.js';

export default class Detail extends React.Component {
    static async getInitialProps() {
        return {}
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <Layout>
                <h1>{this.props.url.query.title}</h1>
                <p>This is the blog post content.</p>
                <p>This is count: {this.state.count}</p>
                <div onClick={() => {
                    console.log('count++')
                    this.setState({count: this.state.count + 1})
                }}>click:count++
                </div>
            </Layout>
        )
    }
}