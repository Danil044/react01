import React from "react";
import {Link, Routes} from "react-router-dom";

export default class MenuMain extends React.Component{
    render() {
        return(
            <nav>
                <ul className="MenuMain">
                    <li>
                        <a href="/" className="MenuMainA"><a >Home</a></a>
                    </li>
                    <li>
                        <a href="/about" className="MenuMainA">MyArray</a>
                    </li>
                    <li>
                        <a href="/contact" className="MenuMainA">Contact</a>
                    </li>
                    <li>
                        <a href="/portfolios"  className="MenuMainA">Portfolios</a>
                    </li>
                </ul>
            </nav>
        )
    }
}