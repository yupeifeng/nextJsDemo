import React from 'react';
import Layout from '/components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeStore} from '/modules/index/action';
import {indexType} from "/modules/actiontype";

@connect(
    (state, ownProps) => {
        return {
            index: state.index
        };
    },
    (dispatch, ownProps) => {
        return {
            changeStore: bindActionCreators(changeStore, dispatch)
        };
    }
)
export default class Index extends React.Component {
    static async getInitialProps({store, isServer, pathname, query}) {
        let res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        let data = await res.json();
        store.dispatch({type: indexType.indexStore_change_store, store: {title: 'Batman', list: data || []}});

        return {
            isServer: isServer,
            pathname: pathname,
            query: query
        }
    }

    render() {
        let {title, list} = this.props.index;

        return (
            <Layout>
                <h1>{title} TV Shows</h1>
                <ul>
                    {list.map(({show}) => (
                        <li key={show.id}>
                            <Link href={`/d/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={async () => {
                    let res = await fetch('https://api.tvmaze.com/search/shows?q=ironman');
                    let data = await res.json();

                    this.props.changeStore({title: 'Batman', list: data || []});
                }}>
                    点击换一批
                </div>
                <style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
            </Layout>
        )
    }
};