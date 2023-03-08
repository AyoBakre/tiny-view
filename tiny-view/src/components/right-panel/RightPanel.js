import React from "react";
import BuildHistory from "./BuildHistory";

function RightPanel() {
    return (
        <div class="col right-side mt-4">
            <p>Builds</p>
            <BuildHistory />
        </div>
    );
}

export default RightPanel;
