import React, { Component } from 'react';
import './App.scss';
// import { ToastContainer, toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/header";
class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }
}
export default App;

