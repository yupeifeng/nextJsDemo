import React from 'react';
import Layout from '../components/MyLayout.js';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {changeStore} from "../modules/about/action";

@connect(
    (state, ownProps) => {
        return {
            about: state.about
        };
    },
    (dispatch, ownProps) => {
        return {
            changeStore: bindActionCreators(changeStore, dispatch)
        };
    }
)
export default class About extends React.Component {
    static async getInitialProps({store, isServer, pathname, query}) {
        return {
            isServer: isServer,
            pathname: pathname,
            query: query
        }
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