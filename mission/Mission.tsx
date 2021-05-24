import React,{ Component } from 'react';

export default class Mission extends Component {

render() {
  console.debug("Mission.render");
  const mission = this.props.mission;
  return (
    <div className="pv-entity__role-details">
      <span className="pv-entity__timeline-node"></span>
        <div className="display-flex justify-space-between full-width">
          <div className="pv-entity__role-container">
            <div className="pv-entity__role-details-container pv-entity__role-details-container--timeline pv-entity__role-details-container--bottom-margin">

              <div className="pv-entity__summary-info-v2 pv-entity__summary-info--background-section pv-entity__summary-info-margin-top mb2">
            fonction {mission.fonction} depuis {mission.dateDebut}<br/>
              <div className="pv-entity__role-details-container pv-entity__role-details-container--timeline pv-entity__role-details-container--bottom-margin">
            {mission.commentaire}
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
);
}
									
}