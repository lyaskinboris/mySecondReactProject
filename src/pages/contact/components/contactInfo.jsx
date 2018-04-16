import React from "react";
import Contact from './contact.jsx';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpenContactDescription = this.handleOpenContactDescription.bind(this);
        this.handleEditContact = this.handleEditContact.bind(this);
        this.handleSaveEditedContact = this.handleSaveEditedContact.bind(this);

        this.state = {
            isOpenContactDescription : false,
            isEditText: false
        };
    }

    handleOpenContactDescription() {
        this.setState(
            { isOpenContactDescription: !this.state.isOpenContactDescription }
        );
    }

    handleEditContact() {
        this.setState(
            {
                isEditText: !this.state.isEditText
            }
        );
    }

    handleSaveEditedContact() {
        this.setState(
            {
                isEditText: !this.state.isEditText
            }
        );
        var newContact = {
            id: this.props.index,
            name: this.refs.newName.value,
            age: this.refs.newAge.value,
            phoneNumber: this.refs.newPhone.value,
            textInfo: this.refs.newTextInfo.value
        }
        this.props.editContact(newContact);
    }

    render() {
        const openContactDescription = this.state.isOpenContactDescription  ?
            <p> {this.props.name} {this.props.textInfo} </p>
            : "";
        if (!this.state.isEditText) {
            return (
                <div>
                    <Contact
                        name={this.props.name}
                        age={this.props.age}
                        phoneNumber={this.props.phoneNumber} />

                    <button onClick={this.handleOpenContactDescription}>
                        {this.state.isOpenContactDescription  ? "Закрыть" : "Описание"}
                    </button>

                    <input type="button" value="Изменить контакт" onClick={this.handleEditContact}/>

                    {openContactDescription}
                </div>
            );
        } else {
            return (
                <div className = "editContact">
                    <label>Ваше имя: </label> <input type = "text" ref = "newName" defaultValue = {this.props.name} /> 
                    <label>Ваш возраст: </label> <input type = "text" ref = "newAge" defaultValue = {this.props.age} /> 
                    <label>Ваш номер телефона: </label> <input type = "text" ref = "newPhone" defaultValue = {this.props.phoneNumber} />
                    <label>Описание вас: </label> <textarea ref = "newTextInfo" defaultValue = {this.props.textInfo} rows = "10"/> 
                    <input type="button" value="Изменить" onClick={this.handleSaveEditedContact}/>
                </div>
            );
        }
    }
}

export default ContactInfo;