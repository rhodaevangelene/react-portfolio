import React from "react";
import Navigation from "../Navigation";


function Header(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header className="flex-row mx-1" >
            <div>
                <h2>Rhoda Evangelene</h2>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;