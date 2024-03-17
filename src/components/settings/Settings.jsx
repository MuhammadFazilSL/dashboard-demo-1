import React, { useState } from 'react'
import "./settings.css"

import Setprofile from './set-profile'
import Setsecurity from './set-security'
import Setshops from './set-shops'
const Settings = () => {
  const sidebar =["Personal Information","Security","Linked Shops"]
  const [active, setactive] = useState(0)
  const changesettings=(index)=>{
setactive(index)
  }
  return (
    <section className='settings-section'>
      <div className="top-container">
        <span>
          <h2>Settings</h2>
          <p>Manage your account settings</p>
        </span>
        <span>
          <button>save change</button>
          <button>cancel</button>
        </span>
      </div>
      <div className="main-container card">
        <div className="set-sidebar">
        <ul>
        {
          sidebar.map((items,index)=>(
           
              <li key={index} className={index===active ? "active":""} onClick={()=>changesettings(index)}>{items}</li>
          
          ))
        }
          </ul>
        </div>
        <hr />
        {
          active===0 ?
        <Setprofile />
          :
          active===1 ?
          <Setsecurity />
          :
          <Setshops />
        }
      </div>
    </section>
  )
}

export default Settings