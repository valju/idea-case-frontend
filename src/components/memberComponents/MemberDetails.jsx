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
					<p>Waiting server response for member list...</p>
				) : (
          <div>
					<MemberItem item={this.props.members.memberCurrent[0]} />
          <Link to={`/member/update/${this.props.members.memberCurrent[0].id}`}>
          
          <button>Update</button>
          </Link>
          </div>
				)}
				<p>
					<Link to="/members"><button>Back to Member List</button></Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(MemberDetails);
