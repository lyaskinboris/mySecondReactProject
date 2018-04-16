import {combineReducers} from "redux";
import contactList from "./contact.jsx";
import ContactActive from "./contactActive.js";

const rootReducers = combineReducers({
    contactList,
    ContactActive
});

export default rootReducers;