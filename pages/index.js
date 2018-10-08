import React from 'react';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default class Index extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();

        console.log(`Show data fetched. Count: ${data.length}`);

        return {
            list: data
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            title: 'Batman',
            list: props.list || []
        }
    }

    render() {
        return (
            <Layout>
                <h1>{this.state.title} TV Shows</h1>
                <ul>
                    {this.state.list.map(({show}) => (
                        <li key={show.id}>
                            <Link href={`/d/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={async () => {
                    const res = await fetch('https://api.tvmaze.com/search/shows?q=ironman');
                    const data = await res.json();

                    console.log(`Show data fetched. Count: ${data.length}`);

                    this.setState({
                        title: 'IronMan',
                        list: data
                    })
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