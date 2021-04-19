import React, { Component } from 'react'
import './App.css';
import Header3 from './Header3'

class Download2 extends Component {
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
                    <label>Download Contributors: </label>
                    <input type="button" value="Download" onClick={this.handleDownload} style={this.downmarg}></input>
                </div>
            </div>
            <Header3 />
            </React.Fragment>
        )
    }
}

export default Download2
