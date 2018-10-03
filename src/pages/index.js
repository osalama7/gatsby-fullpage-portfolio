import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Profile from '../components/profile';
import LocationIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import BottomNav from '../components/bottom';
import Fade from '@material-ui/core/Fade';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		margin: 10,
	},
	root: {
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`,
		flexGrow: 1,
	},
	wrapper: {
		maxWidth: 400,
	},
	icon: {
		margin: theme.spacing.unit * 2,
	},
	iconHover: {
		margin: theme.spacing.unit * 2,
	},
	row: {
		display: 'flex',
		justifyContent: 'center',
	},
	avatar: {
		marginTop: 100,
	},
	bigAvatar: {
		width: 120,
		height: 120,
	},

	spacing: '40'
});
class RootIndex extends React.Component {


  render() {
  	const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};
    // const [cv] = get(this, 'props.data.allContentfulPerson.edges');

		const { classes } = this.props;
      return (
				<div>
				<ReactFullpage
    
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state); // eslint-disable-line no-console

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section section1">
            <h3>Section 1</h3>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Move down
            </button>
          </div>
          <div className="section">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
      );
    }}
  />
					
				</div>
      )
  }
}
RootIndex.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RootIndex);

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          yearsOfExperience
          gh {
            file {
              url
              fileName
              contentType
            }
          }
          bgImg {
            file {
              url
              fileName
              contentType
            }
          }
          website
          shortBio {
            shortBio
          }
          skills {
            itemList {
              name
              years
              icon
            }
          }
          socialLinks {
            itemList {
              name
              icon
            }
          }
          education {
						itemList {
							name
							yearTo
							yearFrom
						}
					}
					experience {
						itemList {
							name
							company
							yearTo
							yearFrom
						}
					}
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
