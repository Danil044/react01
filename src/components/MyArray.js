import React from "react"

class MyArray extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={
            myArray: ["my", "body"]
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    onAdd(ev){
        const state = this.state
        state.myArray.push(this.state.myVal)
        this.state.myVal = ''
        this.setState(state)
    }

    onDelete(ev){
        this.state.myArray.splice(ev, 1);
        this.setState({myArray: this.state.myArray})
    }

    onUpdate(ev){
        this.state.myArray.splice(ev, 1);
        this.setState({myArray: this.state.myArray})
        const state = this.state
        state.myArray.push(this.state.myVal)
        this.state.myVal = ''
        this.setState(state)
    }

    onInputChange(ev){
        const  state = this.state
        const name = ev.target.name
        state[name] = ev.target.value
        this.setState(state)
    }

    render() {
        const a = this.state.myArray
        return(
            <div>
                <h2> My Array </h2>
                <ul className="UlLi">
                    {
                        a.map( (el,i)=> {
                           return(<li key={'arrEL_' + i}> {el}
                               <button className="delete" onClick={this.onDelete.bind(this, 'arrEL_' + i)}>
                                   Delete
                               </button>
                               <button className="update" onClick={this.onUpdate.bind(this, 'arrEL_' + i)}>
                                   Update
                               </button>
                           </li>)
                        })
                    }
                </ul>
                <div>
                    <input name="myVal" className="myVal" onChange={this.onInputChange}></input>
                    <button className="add" onClick={this.onAdd}>Add</button>
                </div>
            </div>
        )
    }
}

export default MyArray