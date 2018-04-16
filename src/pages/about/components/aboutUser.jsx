import React from "react";
import ContactList from "./../containers/contactList.jsx";
import Details from "./../containers/detailsContact.js";
const AboutUser = () => (
    <div>
        <h1> О пользователе </h1>
        <p> Молодой человек, умеем, мб не умеет все! Стек, который мы используем: </p>
        <ul>
            <li> React.js </li>
            <li> HTML 5 </li>
            <li> Node.js </li>
        </ul>
        <ContactList />
        <Details /> 
    </div>
);
export default AboutUser;