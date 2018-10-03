import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import { GithubCircle, LinkedinBox, TwitterBox, StackOverflow } from 'mdi-material-ui/';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const styles = {
	root: {
		margin: '5px',
		paddingTop: '4em',
		paddingBottom: '10px'

	},
};

class ProfileBottomNavigation extends React.Component {
	state = {
		value: 1,
	};


	render() {
		const { classes } = this.props;
		return (
				<div className={classes.root}>
					
				</div>
		);
	}
}

ProfileBottomNavigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileBottomNavigation);
