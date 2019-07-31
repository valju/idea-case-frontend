import React, { Component } from "react";
import { fetchAllUsers } from "../../actions/user";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserList extends Component {
	componentDidMount() {
		this.props.usersFetchAll();
	}

	render() {
		return (
			<div>
				<h4>List of Users</h4>
				<table>
					<thead>
						<tr>
							<th>User</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.userList.map(item => (
							<tr key={item.username}>
								<td>
									<UserItem item={item} />
									{item.username}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<br />
				<button type="button">
					<Link to="/vendors">Back to all vendors</Link>
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	usersFetchAll: () => {
		dispatch(fetchAllUsers());
	},
});

const mapStateToProps = state => ({
	users: state.users,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
