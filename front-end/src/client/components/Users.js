import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import CreateTask from './CreateTask';
import ViewTask from './ViewTask';
import Navigations from './Navigations';

class Users extends Component {
	render() {
		return (
			<div id="dashboard">
				<div className="left-content">
					<Navigations location={this.props.location} />
				</div>
				<div className="right-content">
					<div className="min-header"></div>
					<div className="right-inner-wrapper">
						<h2 className="page-header">Users</h2>
						<div className="page-widget">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit atque provident a porro, culpa cumque iure illo commodi magni minima libero tempora praesentium alias assumenda quo nulla officiis, esse odit?
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	// windowHeight: state.windowHeight,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		// WINDOW_RESIZE,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Users);

