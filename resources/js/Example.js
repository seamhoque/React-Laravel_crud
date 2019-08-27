require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import About from "./components/About";
import AddReg from "./components/AddReg";
import Home from "./components/Home";
import UpdateReg from "./components/UpdateReg";



export default class Example extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                {/*<nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                </nav>*/}

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand"><Link to="/"  style={{ textDecoration: 'none',  color: "black" }} >Home</Link></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link"><Link to="/add" style={{ textDecoration: 'none',  color: "black" }} >Add User</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/about"  style={{ textDecoration: 'none',  color: "black" }} >About</Link></a>
                                </li>

                            </ul>

                        </div>
                    </nav>



                    {/*<Navbar bg="grey" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link style = 'none' to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/add">Add User</Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>*/}

                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/add" component={AddReg}/>
                    <Route path="/edit/:id" component={UpdateReg}/>
                </div>
            </Router>




        )
    }
}

if (document.getElementById('example')) {
    console.log("inside");
    ReactDOM.render(<Example />, document.getElementById('example'));
}
