import React from "react";
import ContactList from "./contactsList.jsx";
import ContactFinder from "./contactFinder.jsx";
import "./../styles/contactApp.less";


class ContactApp extends React.Component {
    constructor() {
        super();
        this.state = {
            contactList: [
                {
                    id: 0,
                    name: "Борис",
                    age: 22,
                    phoneNumber: "7-894-974-2672",
                    textInfo: "проживает там-то, учится там-то, работает, а вот не работает, но спортом занимается, что тоже неплохо!!!"
                },
                {
                    id: 1,
                    name: "Артем",
                    age: 19,
                    phoneNumber: "7-893-474-2672",
                    textInfo: "проживает там-то, учится там-то, работает, а вот не работает, но спортом занимается, что тоже неплохо!!!"
                },
                {
                    id: 2,
                    name: "Иван",
                    age: 21,
                    phoneNumber: "7-894-943-2672",
                    textInfo: "проживает там-то, учится там-то, работает, а вот не работает, но спортом занимается, что тоже неплохо!!!"
                }
            ]
        };
        this.fullContactList = this.state.contactList;
        this.handleViewContact = this.handleViewContact.bind(this);
        this.handleEditContact = this.handleEditContact.bind(this);
    }
    handleViewContact(listFoundContacts) {
        this.setState({
            contactList: listFoundContacts
        });
    }

    handleEditContact(contact) {
        var oldContactList = this.state.contactList;
        oldContactList[contact.id] = contact;
        this.setState({
            contactList: oldContactList
        });
    }
    render() {
        return (
            <div className="App">
            
                <ContactFinder
                    contactList={this.state.contactList}
                    contactFind={this.handleViewContact}
                    getFullContacsList={this.handleViewContact}
                    fullContactList={this.fullContactList}> Борис </ContactFinder>
                <ContactList editContact={this.handleEditContact} contactList={this.state.contactList} />
            </div>
        );
    }
}
export default ContactApp;