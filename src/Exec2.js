import React, { Component } from 'react'
import Download2 from './Download2'
import './App.css';

class Exec2 extends Component {

    componentDidMount() {

        const user = this.props.username;
        const repo = this.props.reponame;

        var request = new XMLHttpRequest();

        request.open('GET', `https://api.github.com/repos/${user}/${repo}/contributors`, true)

        request.onload = function () {
            var data = JSON.parse(this.response);
            //console.log(data);
            var statushtml = "";
            for (let dat of data) {
                statushtml += `<tr>`;
                statushtml += `<td> ${dat.id} </td>`;
                statushtml += `<td> ${dat.login} </td>`;
                statushtml += `<td> ${dat.contributions} </td>`;
                statushtml += `<tr>`;
            }
            document.getElementById("tbody2").innerHTML = statushtml;

        }

        request.send();

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.count !== this.props.count) {


            const user = this.props.username;
            const repo = this.props.reponame;

            var request = new XMLHttpRequest();

            request.open('GET', `https://api.github.com/repos/${user}/${repo}/contributors`, true)

            request.onload = function () {
                var data = JSON.parse(this.response);
                //console.log(data);
                var statushtml = "";
                for (let dat of data) {
                    statushtml += `<tr>`;
                    statushtml += `<td> ${dat.id} </td>`;
                    statushtml += `<td> ${dat.login} </td>`;
                    statushtml += `<td> ${dat.contributions} </td>`;
                    statushtml += `<tr>`;
                }
                document.getElementById("tbody2").innerHTML = statushtml;

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
                                <th>Contributions</th>
                            </tr>
                        </thead>
                        <tbody id="tbody2">

                        </tbody>
                    </table>
                </div>
                <Download2 user={this.props.username} const repo={this.props.reponame} />
            </div>

        )

    }
}

export default Exec2;






