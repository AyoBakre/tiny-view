import React from "react";
import successIcon from '../images/bx-message-square-check.svg'
import errorIcon from '../images/bx-message-square-error.svg'

function Applications() {
    return (
        <div class="col app-list">
            <div class="row left-side-row">
        
                <div class="col app">
                    <p>Chat App</p>
                    <span>2 environments</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                </div>
                <div class="col app active-app">
                    <p>Chat App</p>
                    <span>2 environments</span>
                    <div class="mark-img">
                        <img src={errorIcon} alt="" />
                    </div>
                </div>
                <div class="col app">
                    <p>Chat App</p>
                    <span>2 environments</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                </div>
                <div class="col app">
                    <p>Chat App</p>
                    <span>2 environments</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                </div>
                <div class="col app">
                    <p>Chat App</p>
                    <span>2 environments</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;
