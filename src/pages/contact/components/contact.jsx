import React from 'react';

class Contact extends React.Component {
	render() {
		const person = <div>
			<p> {this.props.name} </p>
			<p> {this.props.age} </p>
			<p> {this.props.phoneNumber} </p>
		</div>;
		return person;
	}
}

export default Contact;