import React from 'react'
import UserDetails from './UserDetails'
import Applications from './Applications'


function LeftPanel() {
  return (
    <div class='col left-side border-end'>
        <div class="mt-4">    
            <div class="row left-side-row">
                <UserDetails />
                <Applications />
                <div class="col bottom-btn">
                    <div class="text-center">
                        <button 
                        type="button" class="btn btn-outline-secondary">
                        New Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftPanel