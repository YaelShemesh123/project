import { connect } from "react-redux";
import React, { useState } from "react"; 
import { actions } from './Redux/action'


function mapStateToProps(state) {
        return{
            UserComponent : state.UserReducer.User,
        };
  }
     export default connect(mapStateToProps)(function UsersDetails(props) {
            return (
            <>
            <h1>hi, {props.UserComponent.name}</h1>
            <br/>
           <h2>My name is:{props.UserComponent.name==""? props.UserComponent.name: " full name" } </h2>
           <h2>I am {props.UserComponent.age==""? props.UserComponent.age: " age" } years old</h2>
           <h2>and I leave in:{props.UserComponent.city==""? props.UserComponent.city: " home town" }</h2>

             </>
                 );
               }
             ) 
