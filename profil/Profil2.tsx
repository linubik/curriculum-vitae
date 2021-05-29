import React,{ Component } from 'react';
import content from './profil.json';
import Experience from '../experience/Experience';
import styles from '../linkedin.css'; 
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

export default class Profil extends Component {

render() {
  const strings = content;
  const experiences = strings.experiences;
  return (
      <div style={styles} className="pv-profile-section pv-profile-section--reorder-enabled background-section artdeco-card mt4 ember-view">
	  		<header>
		  		<h3>{strings.prenom} {strings.nom}</h3>
          <h3>{strings.fonction}</h3>
          {strings.societe} (groupe {strings.groupe})<br/>
			  </header>
        <div className="pv-profile-section-pager ember-view">
          <section className="pv-profile-section experience-section ember-view">
            {experiences.length} experiences
            <ul>
            {
              experiences.map((item,index) => {return (<li key={index}><Experience experience={item}></Experience></li>)})
              }
            </ul>
          </section>
        </div>
      </div>
);
}

}