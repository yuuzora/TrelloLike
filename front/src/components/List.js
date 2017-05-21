import React from 'react';
import Task from './Task'

export default class List extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
        	{
        		this.props.lists.map(
        			item => (
      				  <div className="col-sm-6" key={ item._id.toString()}>
        					<h2> {item.title} </h2>
  	  					  <ul className="list-group" >
  	  						 <li className="list-group-item"><Task tasks={item.tasks}/></li>
  	  					  </ul>
                </div>
    				  )
            )	
        	}
        </div>
      </div>
    );
  }
}
