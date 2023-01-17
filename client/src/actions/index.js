import axios from 'axios';
import { AUTH_ERROR, AUTH_SIGN_UP,AUTH_SIGN_OUT, AUTH_SIGN_IN } from './types';
export const signUp = data => {
    return async dispatch => {
        try {
           const res = await axios.post('http://localhost:5000/users/signup',data);
           dispatch({
            type: AUTH_SIGN_UP,
            payload:res.data.token
            });

            localStorage.setItem('JWT_TOKEN',res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email already exists'
            });
            console.error('err',error);
        }
    }

}
export const signIn = data => {
    return async dispatch => {
        try {
           const res = await axios.post('http://localhost:5000/users/signin',data);
           dispatch({
            type: AUTH_SIGN_IN,
            payload:res.data.token
            });

            localStorage.setItem('JWT_TOKEN',res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Invalid credentials'
            });
            console.error('err',error);
        }
    }

}
export const signOut=()=>{
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN')
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        });
    }
}

export const addProject = async data =>{
   
        try {
            const res = await axios.post('http://localhost:5000/users/dashboard',data);
            
        } catch (error) {
            console.error(error);
        }
  
}