import React from "react";
import "./../styles/finder.less";

class ContactFinder extends React.Component {
    constructor(props){
        super(props);
        this.contactList = this.props.contactList;
        this.state = {
            contactForSearch: ""
        };
        this.handleFindContact = this.handleFindContact.bind(this);
        this.handleGetFullContactList = this.handleGetFullContactList.bind(this);
    }

    updateInputValue(event){
        this.setState({
            contactForSearch: event.target.value
        });
    }

    handleFindContact(){
        let searchQuery = this.state.contactForSearch.toLowerCase();
        let result = this.props.contactList.filter( (item) => item.name.toLowerCase() == searchQuery);
        this.props.contactFind(result);
    }

    handleGetFullContactList(){
        this.state.contactForSearch = "";
        this.refs.fieldForSearchContact.value = "";
        
        this.props.getFullContacsList(this.props.fullContactList);
    }

    render() {
        return (
            <div className = "finder"> 
                <label> Привет {this.props.children} </label>
                <input type = "text" ref = "fieldForSearchContact" onChange = { event => this.updateInputValue(event)}/>
                <input type = "button" value = "Найти" onClick = {this.handleFindContact}/>
                <input type = "button" value = "Список контактов" onClick = {this.handleGetFullContactList} />
            </div>
        );
    }
}
export default ContactFinder;