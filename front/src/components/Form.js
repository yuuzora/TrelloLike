import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div className="col-xs-6">
                <div className="form-group">
                    <input className="form-control" placeholder="Add a list" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add a list</button>
                </div>
                <hr />
                <div className="form-group">
                    <input className="form-control" placeholder="Add a task" />
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Enter a user" />
                </div>
                <div className="form-group">
                    <select className="form-control">
                        {this.props.lists.map(list => (
                        <option value="">{list.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add a task</button>
                </div>
            </div>
        );
    }
}
