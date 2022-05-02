import React from "react"
import PortfoliosListItem from "./PortfoliosListItem";
import PortfoliosListCreateItem from "./PortfoliosListCreateItem";

export default class PortfoliosList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            portfolios: [
                //{id: "1", name: "First work"},
                //{id: "2", name: "Second work"}
            ],
            isLoad: true,
            error: null
        }

        this.create = this.create.bind(this)
        this.onLogAll = this.onLogAll.bind(this)

        this.localSaveAll = this.localSaveAll.bind(this)
        this.localLoadAll = this.localLoadAll.bind(this)
        this.localClear = this.localClear.bind(this)
    }

    create(newPortfolio){
        newPortfolio.id = Date.now();
        const state = this.state
        state.portfolios.push(newPortfolio)

        this.setState(state)
    }

    onLogAll(){
        console.log(this.state.portfolios)
    }

    localSaveAll(){
        localStorage.setItem('ninyPortfolio', JSON.stringify(this.state.portfolios))
    }

    localLoadAll(){
        const state = this.state
        let str = localStorage.getItem('ninyPortfolio')
        console.log(str)
        if(!str) state.portfolios = []
        else state.portfolios = JSON.parse(str)
        this.setState(state)
    }

    localClear(){
        localStorage.clear()
    }

    render(){
        if(this.state.error) return  this.renderError()
        if(!this.state.isLoad) return this.renderLoading()

        return(
            <div>
                <h2> All list </h2>
                <button onClick={this.onLogAll}>Console</button>
                <button onClick={this.localSaveAll}>localSaveAll</button>
                <button onClick={this.localLoadAll}>localeLoadAll</button>
                <button onClick={this.localClear}>localClear</button>

                <ul>
                    {this.state.portfolios.map(p => {
                        return(<PortfoliosListItem portfolio = {p} key={'portfolioListItem_' + p.id} />)
                    })}
                </ul>


                <div>
                    <PortfoliosListCreateItem onSave={this.create}/>
                </div>

            </div>
        )
    }

    renderLoading(){
        return(
            <div> loading </div>
        )
    }

    renderError(){
        return(
            <div>ERROR {this.state.error}</div>
        )
    }

}