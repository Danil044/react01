import React from "react"

export default class PortfoliosListCreateItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            portfolio: {}
        }

        this.changeVisible = this.changeVisible.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onUploadFile = this.onUploadFile.bind(this)
        this.saveDataFile = this.saveDataFile.bind(this)

    }

    saveDataFile(data){
        console.log(data)
        const state = this.state
        state.portfolio['imgBlob'] = data
        this.setState(state)
    }

    onUploadFile(ev){
        const state = this.state
        state.portfolio['img'] = ev.target.value
        state.portfolio['file'] = ev.target.files[0]
        this.setState(state)

        if(FileReader){
            let fileReader = new FileReader()
            const save = this.saveDataFile
            fileReader.onload = function () {
                save(fileReader.result)
            }
            fileReader.onerror = function (err) {
                console.log(err)
            }
            fileReader.readAsDataURL(ev.target.files[0])
        }
    }

    changeVisible(){
        const state = this.state
        state.isVisible = !state.isVisible
        this.setState(state)
    }

    onSave(){

        //1
        //const formData = new FormData(document.getElementById('formPortfolio'));

        //2
        const formData = new FormData()
        formData.append('name', this.state.portfolio.name)

        //3
        formData.append('img', document.getElementById('formImg').files[0])

        //formData.append('name', this.state.portfolio.name)
        //formData.append('img', this.state.portfolio.file, this.state.portfolio.img)
        //formData.append(this.state.portfolio)

        /*
        for(const name in this.state.portfolio){
            formData.append(name, this.state.portfolio[name])
        }
        */
        fetch('/api/portfolios/',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    //'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Content-Type' : 'multipart/form-data'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: formData // body data type must match "Content-Type" header
            })
            .catch(err => {console.log(err)})


        this.props.onSave(this.state.portfolio)
        const state = this.state
        state.isVisible = !state.isVisible
        state.portfolio = {}
        this.setState(state)
    }

    onInputChange(ev){
        const state = this.state
        const name = ev.target.name
        state.portfolio[name] = ev.target.value
        this.setState(state)
    }

    render(){
        if(!this.state.isVisible) return (
            <div onClick = {this.changeVisible}> show </div>
        )

        let img

        if(this.state.portfolio.imgBlob)
            img = (<img src={this.state.portfolio.imgBlob} width="50px" height="50px" alt='prev'/>)
        else
            img = (<div>Not Img</div>)

        return(
            <form id='formPortfolio'>
                {img}
                <input type="text" name="name" onChange={this.onInputChange}/>
                <input type="file" name="img" onChange={this.onUploadFile} id='formImg' /><br />
                <input type="button" value="save" onClick={this.onSave}/>
                <div onClick={this.changeVisible}> hide </div>
            </form>
        )
    }
}