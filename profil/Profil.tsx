import React,{ Component } from 'react';
import content from './profil.json';
import Experience from '../experience/Experience';
import styles from '../linkedin.css'; 
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default class Profil extends Component {

render() {
  const strings = content;
  const experiences = strings.experiences;
  return (
    <div>
      <Accordion style={styles} className="pv-profile-section pv-profile-section--reorder-enabled background-section artdeco-card mt4 ember-view">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <header>
		  		<h3>{strings.prenom} {strings.nom}</h3>
          <h3>{strings.fonction}</h3>
          {strings.societe} (groupe {strings.groupe})<br/>
			  </header>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
);
}

}