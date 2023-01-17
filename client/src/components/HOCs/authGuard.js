import React ,{Component} from "react";

export default (OComponent) =>{
    class MixedComponent extends Component{
        componentDidMount(){

        }
        componentDidUpdate(){
            
        }
        render(){
            return <OComponent />
        }
    }
    return MixedComponent;
};