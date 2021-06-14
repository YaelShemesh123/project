import { replace } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Link, withRouter } from 'react-router-dom';
export const LogIn = withRouter(function LogIn(props) {
    const { history } = props;
    function nextPage() {
        debugger;
        history.push('/ShowUser');

    }
    return (
        <>
            <p>Enter your name:</p>
            <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
            <Link to="/ShowName">Next</Link>
            <button onClick={nextPage}>Next with history</button>
        </>
    );
})
export function ShowName(props) {
    if (!props.name)
        return <Redirect to={{ pathname: "/LogIn", state: { flash: "You must to enter name" } }} />
    return (
        <>
            <h3>Hello {props.name}</h3>

        </>
    );
};
export default withRouter(function Flash(props) {
    const { state } = props.location;
    debugger;
    if (state && state.flash)
        return <h4>{state.flash}</h4>
    return <></>
})



