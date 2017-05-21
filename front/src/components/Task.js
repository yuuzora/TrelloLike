import React from 'react';

export default class Task extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  


 

  render() {
    return (
      <div className="row">
      	{
      		this.props.tasks.map(
      			item => (
					// <div>{JSON.stringify(item)} </div>
            <div className="col-sm-6">
    					<ul className="list-group" key={ item.title.toString()}>
    						<li className="list-group-item cases">{ item.title }</li>
    						<li className="list-group-item">{ item.user } est sur le coup</li>
                <li className="list-group-item">
                  <div className="checkbox">
                    <label> 
                      {item.state.title === 'Done' ? (
                        <input type="checkbox" defaultChecked/>
                        ) : (
                        <input type="checkbox"/>
                        ) 
                      }
                    Tache terminée</label>
                  </div>
                </li>
    					</ul>
            </div>
  				)
  			)	
      	}
  	  </div>
    );
  }
}
