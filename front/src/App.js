import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

export default class App extends Component {
    state = {
        lists: [],
        list: {},
        task: {},
        taskList:  {
            title: ''
        }
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/lists')
        .then(function(response) {
            return response.json()
        }).then((json) => {
            this.setState({
                lists: json,
                taskList : {title: json[0]._id } 
            });
        }).catch(function(ex) {
            'Fail'
        })
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <h1 className="display-3">TrelloLike</h1>
                                <p className="lead">This is shitty todolist.</p>
                            </div>
                            <Form state={this.state} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.lists.map(list => (
                        <List list={list}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
