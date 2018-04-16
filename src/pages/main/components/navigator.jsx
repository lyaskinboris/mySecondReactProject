import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navigation.less";
const Navigator = () => (
    <nav className = "main-nav">
        <ul>
            <li> <Link to="/"> Контакты </Link> </li>
            <li> <Link to="about"> О пользователе </Link> </li>
        </ul>
    </nav>
);
export default Navigator;