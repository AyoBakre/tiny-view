import React from "react";
import AppDetails from "./AppDetails";
import BuildInfo from "./BuildInfo";
import GitDetails from "./GitDetails";

function MiddlePanel() {

    return (
        <div class='col-6 middle border-end'>
            <div class="mt-4">
                <div class="title border-bottom">
                    <p>Chat App</p>
                </div>
                <GitDetails />
                <AppDetails />
                <BuildInfo />
            </div>
        </div>
    );
}

export default MiddlePanel;
