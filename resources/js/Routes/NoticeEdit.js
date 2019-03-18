import React, { Component } from 'react';
import axios from 'axios';
import MyGlobalSetting from '../components/MyGlobalSetting';

export default class NoticeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description: ''
        }
        this.handleInputTitle = this.handleInputTitle.bind(this);
        this.handleInputDescription = this.handleInputDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleInputDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const notices = {
            title: this.state.title,
            description: this.state.description
          }
        let uri = `http://localhost:8000/notices/${this.props.match.params.id}`;
        axios.patch(uri, notices).then(
            location.href="#/notices"
        )
        
    }




    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="title" onChange={this.handleInputTitle}></input>
                    </div>
                    <div>
                        <textarea name="description" onChange={this.handleInputDescription}></textarea>
                    </div>
                    <div>
                        <button>submit</button>
                    </div>
                </form>
            </>
        )
    }
}
