import React from "react";
import Navigator from "./pages/main/components/navigator.jsx";
import CurrentPage from "./pages/main/components/currentPage.jsx";
import "./pages/main/styles/app.less";
const App = () => (
    <div>
        <Navigator />
        <CurrentPage />
    </div>
);

export default App;