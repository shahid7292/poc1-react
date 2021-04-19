import React, { Component } from 'react'
import './App.css'
import Exec from './Exec'
import { Userprovider } from './Usercontext'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            count: 0

        }
    }
    handleUsername = (event) => {
        this.setState({ username: event.target.value })

    }
    handleSubmit = (event) => {

        event.preventDefault()  //to prevent default behaviour which is reloading after submit
        this.setState({ count: this.state.count + 1 })

    }


    render() {
        return (
            <div className="tm-div">
                <form>
                    <div className="shah">
                        <label>Username: </label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                    </div>
                    <div className="shah">
                        <button type="submit" onClick={this.handleSubmit} >SUBMIT</button>
                    </div>
                </form>
                {this.state.count > 0 &&
                    <Userprovider value={this.state.username}>
                        <Exec name={this.state.username} count={this.state.count} />
                    </Userprovider>}
            </div>
        )
    }
}

export default Form
