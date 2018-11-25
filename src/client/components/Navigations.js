import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Navigation extends Component {
	render() {
		return (
			<ul className="no-ul">
				<li><Link to="/" className="active"><i className="fa fa-home"></i>Home</Link></li>
				<li><Link to="/create-task"><i className="fa fa-tasks"></i>Create Task</Link></li>
				<li><Link to="/view-task"><i className="fa fa-plus"></i>View Task</Link></li>
				<li><Link to="/users"><i className="fa fa-users"></i>Users</Link></li>
				<li><Link to="/login"><i className="fa fa-tasks"></i>Logout</Link></li>
			</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

