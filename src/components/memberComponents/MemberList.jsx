import React, { Component } from "react";
import { connect } from "react-redux";
import MemberListItem from "./MemberListItem";
import { fetchAllmembers } from "../../actions/member";

class MemberList extends Component {
	/*
  constructor(props) {
    super(props);
    //this.state = { categories: [] };
  }
  */

	componentDidMount() {
		//this.setState({ categories: fetchTestCategories() });
		this.props.membersFetchAll();
	}

	render() {
		return (
			<div>
				<h4>List of Members</h4>
				<ol>
					{this.props.members.memberList.map(item => (
						<MemberListItem
							key={item.id}
							item={item}
							deleteMemberClicked={this.props.deleteMemberLocal}
						/>
					))}
				</ol>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	membersFetchAll: () => {
		dispatch(fetchAllmembers());
	}
});

const mapStateToProps = state => ({
	members: state.members
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberList);

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component
