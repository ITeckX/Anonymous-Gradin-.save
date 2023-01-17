import React, { Component } from "react";
import {reduxForm, Field} from 'redux-form';
import CustomInput from "./CustomInput";
import {connect} from 'react-redux';
import { compose } from "redux";
import * as actions from '../actions';
import {redirect, useHistory, useNavigate} from 'react-router-dom';
import { withRouter } from "../actions/withRouter";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
    }
    async onSubmit(formData){
        console.log(formData);
        await this.props.signUp(formData);
        if(!this.props.errorMessage){
           
        }
    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <div className="row">
                <div className="col">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <fieldset style={{marginRight:'1000px'}}>
                    <Field 
                    name="email"
                    type="text"
                    id="email"
                    label="Enter e-mail"
                    placeholder="example@mail.com"
                    component={CustomInput}/>
                    </fieldset>
                    <fieldset style={{marginRight:'1000px'}}>
                    <Field 
                    name="password"
                    type="password"
                    id="password"
                    label="Enter your password"
                    placeholder="pass"
                    component={CustomInput}/>
                    </fieldset>
                    {this.props.errorMessage ?
                    <div className="alert alert-danger" style={{marginRight:'1000px',marginTop:'10px'}}>
                        {this.props.errorMessage}
                    </div>
                    :null}
                    <button type="submit" className="btn btn-primary" >Sign Up</button>
                </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        errorMessage: state.auth.errorMessage
    }
}

// export default withRouter( compose(
    
//     connect(mapStateToProps, actions),
//     reduxForm({form: 'signup'})
// )(SignUp))

export default compose(
    
    connect(mapStateToProps,actions),
    reduxForm({form: 'signup'}),
    
)(SignUp);