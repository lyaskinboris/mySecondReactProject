import React from "react";


import AboutUser from "./../../about/components/aboutUser.jsx";
import ContactApp from "./../../contact/components/contactApp.jsx";

import { Route } from "react-router-dom";

const CurrentPage = () => (
    <div>
        <Route exact path="/" component={ContactApp} />
        <Route path="/about" component={AboutUser} />
    </div>
);

export default CurrentPage;