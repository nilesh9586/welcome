import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact  from './Contact';
import Navbar from "./Navbar";
import Footer from './Footer';
import Form from  './Form';
import ToDoList from './ToDoList';
import Search from './Search';

import {Redirect, Route, Switch} from "react-router-dom";
const App= () =>{

    return (

        <>

        <Navbar/>
        <Switch>

        <Route  exact path="/" component={Home}/>
        <Route  exact  path="/about" component={About}/>
        <Route  exact path="/service" component={Services}/>
        <Route  exact path="/con" component={Contact}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/todolist" component={ToDoList}/>
        <Route exact path="/search" component={Search}/>
        <Redirect to="/"/>
        
        </Switch>
        <Footer/>
        </>
    );
}

export default App;