import React from "react";
import person from '../images/Ellipse 3.svg'

function AppDetails() {
    return (
        <div>     
            <div class="environments mt-2">
                <span class='active'>Frontend</span>
                <span>Backend</span>
                <button type="button" class="btn btn-outline-secondary">
                    new environment
                </button>
            </div>
            <div class="env-info-title mt-3">
                <span>Contributors</span>
                <span>Framework</span>
                <span>Region</span>
            </div>
            <div class="env-info-details mt-2">
                <span>
                    <img src={person} alt="" />
                    James Dean
                </span>
                <span>Flutter</span>
                <span>Worldwide</span>
            </div>
            <div class="mt-2 code">
                <span>Code</span>

                <div class='code-details'>
                    <button class='left-chevron'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                    <button class='file-name'>

                    </button>
                    <button class='file-name'>

                    </button>
                    <button class='file-name'>

                    </button>
                    <button class='file-name'>

                    </button>
                    <button class='right-chevron'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="rects mt-2"></div>
        </div>
    );
}

export default AppDetails;
