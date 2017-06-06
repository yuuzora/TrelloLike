import React, { Component } from 'react';

export default class Task extends Component {
    render() {
        return (
            <li className="list-group-item">
                <h4 className="list-group-item-heading">{this.props.task.title}</h4>
                <p className="list-group-item-text">
                    Créée par {this.props.task.user}
                    <br />
                    <br />
                    <label>
                        {this.props.task.state.title === 'Done' ? (
                        <input type="checkbox" defaultChecked />
                        ) : (
                        <input type="checkbox" />
                        )}
                        &nbsp;Tâche terminée
                    </label>
                </p>
            </li>
        );
    }
}
