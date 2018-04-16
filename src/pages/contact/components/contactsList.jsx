import React from 'react';
import ContactInfo from "./contactInfo.jsx";
import "./../styles/contact.less";

class ContactsList extends React.Component {
    render() {
        const contactList = this.props.contactList.map((person) => {
            return <li key={person.id} className="contactInfo">
                <ContactInfo
                    editContact={this.props.editContact}
                    index={person.id} name={person.name}
                    age={person.age}
                    phoneNumber={person.phoneNumber}
                    textInfo={person.textInfo}
                />
            </li>
        });
        return (
            <div>
                <ul className="contactList">
                    {contactList}
                </ul>
            </div>
        );
    }
}
export default ContactsList;
