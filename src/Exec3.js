import React, { Component } from 'react'
import Download3 from './Download3'
import './App.css';

class Exec3 extends Component {

    componentDidMount() {

        const user = this.props.username;
        const repo = this.props.reponame;

        var request = new XMLHttpRequest();

        request.open('GET', `https://api.github.com/repos/${user}/${repo}/issues`, true)

        request.onload = function () {
            var data = JSON.parse(this.response);
            //console.log(data);
            var statushtml = "";
            for (let dat of data) {
                statushtml += `<tr>`;
                statushtml += `<td> ${dat.id} </td>`;
                statushtml += `<td> ${dat.title} </td>`;
                statushtml += `<td> ${dat.user.login} </td>`;
                statushtml += `<td> ${dat?.assignees[0]?.login || "not assigned"} </td>`;
                statushtml += `<tr>`;
            }
            document.getElementById("tbody3").innerHTML = statushtml;

        }

        request.send();

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.count !== this.props.count) {


            const user = this.props.username;
            const repo = this.props.reponame;

            var request = new XMLHttpRequest();

            request.open('GET', `https://api.github.com/repos/${user}/${repo}/issues`, true)

            request.onload = function () {
                var data = JSON.parse(this.response);
                //console.log(data);
                var statushtml = "";
                for (let dat of data) {
                    statushtml += `<tr>`;
                    statushtml += `<td> ${dat.id} </td>`;
                    statushtml += `<td> ${dat.title} </td>`;
                    statushtml += `<td> ${dat.user.login} </td>`;
                    statushtml += `<td> ${dat?.assignees[0]?.login || "not assigned"} </td>`;
                    statushtml += `<tr>`;
                }
                document.getElementById("tbody3").innerHTML = statushtml;

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
                                <th>Title</th>
                                <th>Created By</th>
                                <th>Assigned to</th>
                            </tr>
                        </thead>
                        <tbody id="tbody3">

                        </tbody>
                    </table>
                </div>
                <Download3 user={this.props.username} const repo={this.props.reponame} />
            </div>

        )

    }
}

export default Exec3;






