import React from 'react';

export default class Task extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };


  render() {
    return (
      <div>
      	{
      		this.props.tasks.map(
      			item => (
					// <div>{JSON.stringify(item)} </div>
  					<ul className="list-group" key={ item.title.toString()}>
  						<li className="list-group-item">{ item.title }</li>
  						<li className="list-group-item">{ item.user } est sur le coup</li>
  						<li className="list-group-item">Etat : { item.state.title }</li>
  					</ul>
  				)
  			)	
      	}
  	  </div>
    );
  }
}
