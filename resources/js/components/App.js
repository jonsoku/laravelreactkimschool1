import React, { Component } from 'react';
import Router from "./Router";
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router />
                <GlobalStyles/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
