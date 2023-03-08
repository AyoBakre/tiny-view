import React from 'react'

function BuildInfo() {
  return (
    <div>
        <div class="env-info-title mt-1">
                <span>Build Status</span>
          </div>
            <div class="build-status mt-2">
                <span>(failed)</span>
            </div>
            <div class="build-bar mt-1"></div>
            <div class="env-info-title build-time mt-2">
                <span>started</span>
                <span>12/02/2022</span>
                <span>12:34</span>
            </div>
            <div class="env-info-title build-time mt-1">
                <span>failleed</span>
                <span>12/02/2022</span>
                <span>12:34</span>
            </div>
            <div class="env-info-title build-time mt-3">
              <span>Link</span>
            </div>
            <div class="env-info-title build-time mt-1">
              <span>https.........................................................................</span>
            </div>
    </div>
  )
}

export default BuildInfo