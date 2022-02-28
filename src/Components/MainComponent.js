import React, { Component } from "react";
import Nav from './Nav'
import Footer from './Footer'
import HomePage from './HomePage'


class Main extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <Nav/>
                <hr/>
                <HomePage/>
                <Footer/>
            </div>
        );
    }
}

export default Main;