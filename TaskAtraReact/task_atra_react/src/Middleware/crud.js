import { actions } from "../Redux/action";

export const AddNewUser = ({ dispatch }) => next => action => {
    if (action.type === 'ADD_USER_TO_DB') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({});
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("localhost:4200/newUser", requestOptions)
          .then(response => response.json())
          .then(result =>{
            console.log(result)
            const newUser=result
            dispatch(actions.addUser(newUser))
          })
          .catch(error => console.log('error', error));
    }
    return next(action);
}

export const  getAllUsers=({dispatch})=> next => action =>
{
    var raw = "";

var requestOptions = {
method: 'GET',
body: raw,
redirect: 'follow'
};

fetch("http://localhost:4200/getAllUsers", requestOptions)
.then(response => response.json())
.then(result =>{
console.log(result)
dispatch(actions.getUsers())
})
.catch(error => console.log('error', error));
}