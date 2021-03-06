import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { LOGOUT } from '../actions';

class Navigation extends Component {
	render() {
		const { pathname } = this.props.location;
		const { user } = this.props;
		return (
			<Fragment>
				<div style={{ padding: '20px', paddingBottom: '10px', fontFamily: 'oswald', fontWeight: '400', color: '#eee' }}>Hi! {user.username}</div>
				<ul className="no-ul">
					<li><Link to="/" className={pathname === '/' ? 'active' : ''}><i className="fa fa-home"></i>Home</Link></li>
					<li><Link to="/create-project"className={pathname === '/create-project' ? 'active' : ''}><i className="fa fa-tasks"></i>Create Project</Link></li>
					<li><Link to="/view-projects" className={pathname === '/view-projects' ? 'active' : ''}><i className="fa fa-tasks"></i>View Projects</Link></li>
					<li><Link to="/users" className={pathname === '/users' ? 'active' : ''}><i className="fa fa-users"></i>Users</Link></li>
					<li><Link
						to="/login"
						className={pathname === '/login' ? 'active' : ''}
						onClick={() => this.props.LOGOUT()}><i className="fa fa-tasks"></i>Logout</Link></li>
				</ul>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		LOGOUT,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

