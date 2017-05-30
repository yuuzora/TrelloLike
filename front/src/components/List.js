import React, { Component } from 'react';
import Task from './Task'

export default class List extends Component {
    render() {
        return (
            <div className="panel panel-default" key={this.props.list._id.toString()}>
                <div className="panel-heading">{this.props.list.title}</div>
  	  			<ul className="list-group">
                    {this.props.list.tasks.map(task => (
                    <Task task={task} />
                    ))}
  	  			</ul>
            </div>
        );
    }
}
