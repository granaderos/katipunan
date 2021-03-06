import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';
import CreateTask from './CreateTask';
import ViewTask from './ViewTask';
import Users from './Users';
import CreateProject from './CreateProject';
import ViewProjects from './ViewProjects';
import ViewProject from './ViewProject';
import SignUp from './SignUp';
import EmployeeIndex from '../employee/Index';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
		this.loginUser = this.loginUser.bind(this);
	}

	loginUser(user) {
		this.setState({ user: user });
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Route path="/create-project" exact component={CreateProject} />
					<Route path="/view-projects" exact component={ViewProjects} />
					<Route path="/view-project/:id" exact component={ViewProject} />
					<Route path="/create-task/:id" exact component={CreateTask} />
					<Route path="/view-task" exact component={ViewTask} />
					<Route path="/login" loginUser={this.loginUser} exact component={Login} />
					<Route path="/users" exact component={Users} />
		      <Route path="/" exact component={Dashboard} />
		      <Route path="/signup" exact component={SignUp} />
		      <Route path="/employee" exact component={EmployeeIndex} />
	      </Fragment>
	  	</Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

