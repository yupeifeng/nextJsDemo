import Header from './Header';
import React from "react";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

export default class Layout extends React.Component {
    render() {
        return (
            <div style={layoutStyle}>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}