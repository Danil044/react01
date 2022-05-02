import React from "react"
import "../assets/css/pages/portfolios.css"
import PortfoliosList from "../components/portfolios/list/PortfoliosList";


export default class Portfolios extends React.Component{
    render(){
        return(
            <div>
                <h1>My portfolios</h1>

                <div>
                    <PortfoliosList></PortfoliosList>
                </div>

            </div>
        )
    }
}