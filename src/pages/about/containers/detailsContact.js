import React from "react";
import { connect } from 'react-redux';

class Details extends React.Component {
    render() {
        if(!this.props.contact){
            return (<p> Нажмите кнопку</p>);
        }
        return (
            <div>
                <h2>{this.props.contact.name} </h2>
                <h2>{this.props.contact.age} </h2>
                <h2>{this.props.contact.phoneNumber} </h2>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        contact: state.ContactActive
    };
}
export default connect(mapStateToProps)(Details);