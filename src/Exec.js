import React, { Component } from 'react'
import Download1 from './Download1'
import './App.css';

class Exec extends Component {



    componentDidMount() {

        const user = this.props.name;

        var request = new XMLHttpRequest();

        request.open('GET', `https://api.github.com/users/${user}/repos`, true)

        request.onload = function () {
            var data = JSON.parse(this.response);
            //console.log(data);
            var statushtml = "";
            for (let dat of data) {
                statushtml += `<tr>`;
                statushtml += `<td> ${dat.id} </td>`;
                statushtml += `<td> ${dat.name} </td>`;
                statushtml += `<td> ${dat.url} </td>`;
                statushtml += `<tr>`;
            }
            document.getElementById("tbody1").innerHTML = statushtml;

        }

        request.send();

    }

    

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.count !== this.props.count) {

            let user = this.props.name;

            var request = new XMLHttpRequest();

            request.open('GET', `https://api.github.com/users/${user}/repos`, true)

            request.onload = function () {
                var data = JSON.parse(this.response);
                //console.log(data);
                var statushtml = "";
                for (let dat of data) {
                    statushtml += `<tr>`;
                    statushtml += `<td> ${dat.id} </td>`;
                    statushtml += `<td> ${dat.name} </td>`;
                    statushtml += `<td> ${dat.url} </td>`;
                    statushtml += `<tr>`;
                }
                document.getElementById("tbody1").innerHTML = statushtml;

            }

            request.send();
        }

    }

    render() {

        return (
            <div>
                <div className="renddiv">
                    <table className="tm-table" align="center" cellPadding="15px">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody id="tbody1">

                        </tbody>
                    </table>
                </div>
                <Download1 name={this.props.name} />
            </div>

        )

    }
}

export default Exec;






