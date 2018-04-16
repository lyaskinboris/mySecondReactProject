import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getUser } from "./../actions/index.js";

class ContactList extends React.Component {
    render() {
        return (
            <button onClick = { () => this.props.user(this.props.mainUser)} > Узнать больше </button>
        );
    }
}
function mapStateToProps(state) {
    return {
        mainUser: state.contactList.mainUser
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ user: getUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);