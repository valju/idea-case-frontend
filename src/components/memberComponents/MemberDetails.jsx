import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMember } from "../../actions/member";
import MemberItem from "./MemberItem";

class MemberDetails extends Component {
	componentDidMount() {
		this.props.memberGetById(this.props.id);
	}

	render() {
		return (
			<div>
				{this.props.members.memberCurrent === null ? (
					<p>Waiting server response. Activity indicator could go here.</p>
				) : (
					<MemberItem item={this.props.members.memberCurrent[0]} />
				)}
				<p>
					<Link to="/members">Back</Link>
				</p>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	memberGetById: id => {
		dispatch(getMember(id));
	}
});

const mapStateToProps = state => ({
	members: state.members
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberDetails);
