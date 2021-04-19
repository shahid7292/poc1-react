import React, { Component } from 'react'
import './App.css'
import Exec2 from './Exec2'
import Usercontext from './Usercontext'

class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reposname: '',
            count: 0

        }
    }
    handleReposname = (event) => {
        this.setState({ reposname: event.target.value })

    }
    handleSubmit = (event) => {
        this.setState({ count: this.state.count+1 })
        event.preventDefault()  //to prevent default behaviour which is reloading after submit

    }

    render() {
        return (<Userconsummer>
            {
                (username) => {
                    return (
                        <div className="tm-div">
                            <form>
                                <div className="shah">
                                    <label>Repository Name: </label>
                                    <input type="text" value={this.state.reposname} onChange={this.handleReposname}></input>
                                </div>
                                <div className="shah">
                                    <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
                                </div>
                            </form>
                            {this.state.count>0 && <Exec2 username={username} reponame={this.state.reposname} count={this.state.count} />}
                        </div>
                    )
                }
            }
        </Userconsummer>)

    }
}

export default Form2
