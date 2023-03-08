import React from 'react'
import successIcon from '../images/bx-message-square-check.svg'
import errorIcon from '../images/bx-message-square-error.svg'

function BuildHistory() {
  return (
    <div class="history mt-5">
                <span class='day'>Today</span>
                <div class="col app-his mt-4">
                    <p>Frontend</p>
                    <span>Chat App</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                    <span>Completed 12:54 10 June 2022</span>
                </div>
                <div class="col app-his mt-4">
                    <p>Frontend</p>
                    <span>Chat App</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                    <span>Completed 12:54 10 June 2022</span>
                </div>
                <div class="col app-his mt-4">
                    <p>Frontend</p>
                    <span>Chat App</span>
                    <div class="mark-img">
                        <img src={errorIcon} alt="" />
                    </div>
                    <span>Completed 12:54 10 June 2022</span>
                </div>
                <div class="col app-his mt-4">
                    <p>Frontend</p>
                    <span>Chat App</span>
                    <div class="mark-img">
                        <img src={successIcon} alt="" />
                    </div>
                    <span>Completed 12:54 10 June 2022</span>
                </div>
            </div>
  )
}

export default BuildHistory