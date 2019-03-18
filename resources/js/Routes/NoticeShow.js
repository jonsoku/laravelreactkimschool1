import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NoticeDelete from './NoticeDelete';

export default class NoticeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    componentDidMount(){
        axios
        .get(`http://localhost:8000/notices/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                title : response.data.title,
                description : response.data.description
            })
        })
        .catch(function(error){
            console.log(error);
            console.log('error 야임마')
        })
    }
  render() {
    return (
      <>
        <div>
            {this.state.title}
            {this.state.description}
            <div>
                <Link to={`/notices/${this.props.match.params.id}/edit`}>edit</Link>
            </div>
            <NoticeDelete />
        </div>

      </>
    )
  }
}
