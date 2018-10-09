import React from 'react';
import Layout from '/components/MyLayout.js';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {changeStore} from "/modules/detail/action";

@connect(
    (state, ownProps) => {
        return {
            detail: state.detail
        };
    },
    (dispatch, ownProps) => {
        return {
            changeStore: bindActionCreators(changeStore, dispatch)
        };
    }
)
export default class Detail extends React.Component {
    static async getInitialProps({store, isServer, pathname, query}) {
        return {
            isServer: isServer,
            pathname: pathname,
            query: query
        }
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
                <h1>{this.props.query.title}</h1>
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