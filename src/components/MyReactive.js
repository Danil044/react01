import  React from "react"

class MyReactive  extends  React.Component{
    constructor(props) {
        super(props); // Вызов базового конструктора
        this.state = {
            myName: "Tema"
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount() {
        console.log("Mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Update")
    }

    onInputChange(ev){
        const  state = this.state
        const name = ev.target.name
        state[name] = ev.target.value
        this.setState(state)
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.myName}</h1>
                <input name="myName" onChange={this.onInputChange}></input>
                <input name="Email" onChange={this.onInputChange}></input>
            </div>
        )
    }
}

export default  MyReactive
