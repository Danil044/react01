import React from "react"
import Header from "../layouts/Header";
import MenuMain from "../layouts/MenuMain";
import "../assets/css/pages/about.css";
import MyArray from "../components/MyArray";

export default class About extends React.Component{
    render(){
        return(
            <div>
                <div className="MyAbo">
                    <h1>My array</h1>
                </div>
                <div>
                    <MyArray></MyArray>
                </div>
            </div>
        )
    }
}
