import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { connect } from "react-redux";
import React, { useState } from "react"; 
import { actions } from './Redux/action'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';



function mapStateToProps(state) {
        return{
            userComponent : state.UserReducer.User,
        };
    }
    function mapDispatchToProps(dispatch) {
            return {
            addUser: (user) => dispatch(actions.addUserToDb(user)),
        };
        }
    
     export default connect(mapStateToProps,mapDispatchToProps)(function UserForm(props) {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [age, setAge] = useState('');
        const [hometown, setHometown] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
    function FirstName(e){
        setFirstName(e.target.value)
    }
    function LastName(e){
        setLastName(e.target.value)
    }
    function Age(e){
        setAge(e.target.value)
    }
    function Hometown(e){
        setHometown(e.target.value)
    }
    function Email(e){
        setEmail(e.target.value)
    }
    function Phone(e){
        setPhone(e.target.value)
    }
        function addUserToDataBase()  
//צריך לעשות פונקציה זו במידלוואר.. אבל לא למדתי את הנושא הזה של קריאות דרת מריאקט
        {  
            let newUser = {
                name: firstName +' '+lastName,
                age: age,
                city: hometown,
                email: email,
                phone: phone
            }
            props.addUser(newUser)
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    
                    var raw = JSON.stringify({newUser});
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: raw,
                      redirect: 'follow'
                    };
                    
                    fetch("http://localhost:4200/newUser", requestOptions)
                      .then(response => response.json())
                      .then(result =>{
                        console.log(result)
                        const newUser=result
                        actions.addUser(newUser)
                      })
                      .catch(error => console.log('error', error));
                }
              
            
            return (
            <>
          <div className='App d-flex flex-column align-items-center'>
      <h1>Please fill your details</h1>
      <Form horizontal style={{ width: '300px' }}>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control type='text' onChange={FirstName}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control type='text'onChange={LastName}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type='number'onChange={Age}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Hometown</Form.Label>
          <Form.Control type='text' onChange={Hometown}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Mail</Form.Label>
          <Form.Control type='text'onChange={Email}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type='text' onChange={Phone}/>
        </Form.Group>
        <Button onClick={()=>addUserToDataBase()}>Submit</Button>
{/*  type='submit' */}
      </Form>
    </div>
             </>
                 );
               }
             ) 
