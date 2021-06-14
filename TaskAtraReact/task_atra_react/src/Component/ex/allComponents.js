


import React from "react";
import { useParams } from 'react-router-dom';
export function HomePage() {
    return (
        <><h1>HomePage</h1></>
    );
}
export function About() {
    return (
        <><h1>About</h1></>
    );
}
export function Shopping() {
    return (
        <><h1>Shopping</h1></>
    );
}
export function Payment() {
    debugger;
    let person = useParams();
    let address = ["Rehovot", "Bni Brak", "Netania"];
    return (
        <><h1>Payment</h1>

            <h3>{address[person.id]}</h3>
            <h4>{person.name}</h4>
        </>
    );
}





