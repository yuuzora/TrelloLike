import React, { Component } from 'react';

export default class Form extends Component {

    state = this.props.state;

    handleChangeListTitle(event) {
        this.setState({list: {
            title: event.target.value,
            tasks: []
        }});
    }

    addList() {
        fetch('http://localhost:5000/api/lists', {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            title: this.state.list.title
	        })
	    }).then(() => (response) => {
		    console.log(response);
	    });
    }

    handleChangeTaskTitle(event) {
        const task = {
            title: event.target.value,
            state: {
                title: 'Done',
                color: 'FF0000'
            },
            user: this.state.task.user
        };
        this.setState({task: task});
    }

    handleChangeTaskUser(event) {
        const task = {
            title: this.state.task.title,
            state: {
                title: 'Done',
                color: 'FF0000'
            },
            user: event.target.value
        };
        this.setState({task: task});
    }

    handleChangeTaskList(event) {
        this.setState({taskList: {title: event.target.value}});
    }

    addTask() {
        fetch('http://localhost:5000/api/lists/' + this.state.taskList.title + '/task', {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            title: this.state.task.title,
    	        state: this.state.task.state,
    	        user: this.state.task.user
	        })
	    }).then(() => (response) => {
		    console.log(response);
	    });
    }

    render() {
        return (
            <div className="col-xs-6">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Add a list" onChange={(event) => this.handleChangeListTitle(event)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.addList.bind(this)}>Add a list</button>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Add a task" onChange={(event) => this.handleChangeTaskTitle(event)} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter a user" onChange={(event) => this.handleChangeTaskUser(event)} />
                        </div>
                        <div className="form-group">
                            <select className="form-control" onChange={(event) => this.handleChangeTaskList(event)}>
                                <option value=""></option>
                                {this.props.state.lists.map(list => (
                                <option value={list._id}>{list.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.addTask.bind(this)}>Add a task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
