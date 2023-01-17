import React, { Component } from "react";
import PRTable from "./PRTable";
import Login from "./Login";
export default class Dashboard extends Component{
    render(){
        return(
            <>
             <Login/>
             <PRTable/>
           
            </>
          
        );
    }
}