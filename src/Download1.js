import React, { Component } from 'react'
import './App.css';
import Header2 from './Header2'

class Download1 extends Component {
    downmarg={
        marginLeft:'10px'
    }

    handleDownload= ()=>{
        console.log("downloaded");
    }

    render() {
        return (
            <React.Fragment>
            <div className="tm-download">
                <div className="tm-button">
                    <label>Download Repositories: </label>
                    <input type="button" value="Download" onClick={this.handleDownload} style={this.downmarg}></input>
                </div>
            </div>
            <Header2/>
            </React.Fragment>
        )
    }
}

export default Download1
