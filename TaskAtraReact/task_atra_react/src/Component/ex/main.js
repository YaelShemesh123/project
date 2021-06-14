import React from "react";
import { Link } from 'react-router-dom';


export default function Main() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                    <br />
                    <a href="http://localhost:3000/About">About with href </a>
                </li>
                <li>
                    <Link to="/Shopping">Shopping</Link>
                </li>
                <li>
                    <Link to="/Payment/1/Sara">Payment</Link>
                </li>
                <li>
                    <Link to="/LogIn">LogIn</Link>
                </li>

            </ul>

        </>
    );
}