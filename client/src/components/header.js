import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Login from './Login';
class Header extends Component{
    constructor(props){
        super(props);
        this.signOut=this.signOut.bind(this);
    }
    signOut(){
        console.log('signout');
        this.props.signOut();
    }
    render(){
        return(<>
                
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:'30px'}}>
                <Link className="navbar-brand" to="/">Anonymous Grading</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>

                    </ul>
                    <ul className="nav navbar-nav ms-auto">
                    {!this.props.isAuth ? 
                     [<li className="nav-item" key="signup">
                     <Link className="nav-link" to="/signup">Sign Up</Link>
                 </li>,
                 <li className="nav-item" key="signin">
                     <Link className="nav-link" to="/signIn">Sign In</Link>
                 </li>]
                       :null }
                   {this.props.isAuth ? 
                    <li className="nav-item">
                    <Link className="nav-link" to="/signout" onClick={()=>{this.signOut()}}>Sign Out</Link>
                </li> : null
                   }
                       
                    </ul>
                </div>
            </nav>
            
            </>
        );
    }
}
function mapStateToProps(state){
    return{
        isAuth: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps,actions)(Header);