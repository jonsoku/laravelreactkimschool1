import React, { Component } from 'react';


class NoticeDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('123')

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
        );
    }
}


export default NoticeDelete;