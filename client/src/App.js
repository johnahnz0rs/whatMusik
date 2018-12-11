import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ContentArea from './components/ContentArea';
// import axios from 'axios';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ContentArea />
            </BrowserRouter>
        );
    }
}

export default App;
