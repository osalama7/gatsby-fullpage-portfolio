import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import Grow from '@material-ui/core/Grow';
import ReactIcon from 'mdi-material-ui/React';
import { Nodejs, LanguageJavascript, Docker, Angular, LanguageHtml5, LanguagePhp, LanguageCpp, Ninja, Database, Npm, Console } from 'mdi-material-ui/';

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		direction: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		flexGrow: 1,
		padding: '0.5em',
		margin: '0.5em',
	},

	chip: {
		border: '0.5em',
		avatar: {
			padding: '1em'
		}
	},
});



class SkillsArray extends React.Component {
	state = {
		chipData: this.props.person.node.skills.itemList
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				
			</div>
		);
	}
}

SkillsArray.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsArray);
