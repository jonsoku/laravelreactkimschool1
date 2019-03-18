import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Notice extends Component {

    constructor(props){
        super(props);
        this.state = {
            notices: ''
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost:8000/notices')
        .then(response => {
            this.setState({notices : response.data})
            console.log('hey');
        })
        .catch(function(error){
            console.log(error);
        })
    }

    tabRow(){
        if(this.state.notices instanceof Array){
            return this.state.notices.map(function(object, i){
                return (
                    <tr key={i+1}>
                        <td>
                            {i+1}
                        </td>
                        <td>
                            <Link to={`/notices/${object.id}`}>{object.title}</Link>
                        </td>
                        <td>
                            {object.description}
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
      return (
        <>
            <div>
                <a href="/#/notices/create">click</a>
            </div>
            <table>
                <thead>
                    <td width="200px">id</td>
                    <td width="200px">title</td>
                    <td width="200px">description</td>
                </thead>
                <tbody>
                    { this.tabRow() }
                </tbody>
            </table>
        </>
      )
    }
}
