import React,{ Component } from 'react';
import Mission from '../mission/Mission';

export default class Experience extends Component {

render() {
  console.debug("Experience.render");
  const exp = this.props.experience;
  return (
    <div __class="pv-entity__company-details">
      <div __class="pv-entity__company-summary-info" >
          <article>
          {exp.societe} 
          <div _class="pv-entity__date-range t-14 t-black--light t-normal">
          depuis {exp.dateDebut}
          </div>
          {exp.missions.length} mission{exp.missions.length > 1 ? 's' : ''}
          {
            exp.missions.map((item,index) => {return (<Mission key={index} mission={item} />)})
          }
          </article>
      </div>
    </div>
  )
 ;
}
									
}