import React from "react"
import MyReactive from "../components/MyReactive";
import MenuMain from "./MenuMain";
import {Link} from "react-router-dom";
import ImgLogo from "../assets/img/logo.svg"

class Header extends React.Component{
    render(){
        return(
            <header>
                <ul className="HeaderUL">
                    <li>
                        <a href="/">
                            <img className="ImgHeader" src={ImgLogo} width="50px;" height="50px;"/>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="MyWebsite">
                            Мой сайт
                        </a>
                    </li>
                </ul>

                <MenuMain></MenuMain>
            </header>

        )
    }
}

export default  Header