import React from 'react'

import user_image from '../../assets/images/profile.png'

const Setprofile = () => {
    const forminputs1 =[
      {
        label:"username",
        placeholder:"Zendaya"
      },
      {
        label:"Address",
        placeholder:"655 D annanagar"
      }
    ]
    const forminputs2 =[
      {
        label:"state",
        placeholder:"Tamilnadu"
      },
      {
        label:"Country",
        placeholder:"India"
      }
    ]
  return (
    <div className="set-main">
    <div>
      <h3>General Information</h3>
      <p>About your profile</p>
      <hr />
    </div>
    <div>
      <h3>Profile</h3>
      <span>
        <img src={user_image} alt="" />
        <span>
          <p>Mark Collins</p>
          <p>Role/Title</p>
          <p>Location</p>
        </span>
        <div className="buttons">
          <button>change</button>
          <button>Delete</button>
        </div>
      </span>
    </div>
    <div className='forms'>
    <span>
      {
        forminputs1.map((items)=>(
         
           <>
            <label htmlFor={items.label}>{items.label}</label>
            <input type="text" placeholder={items.placeholder}/>
           </>
        
        ))
      }
      </span>
      <span>
      {
        forminputs2.map((items)=>(
         
           <>
            <label htmlFor={items.label}>{items.label}</label>
            <input type="text" placeholder={items.placeholder}/>
           </>
        
        ))
      }
      </span>
    </div>
  </div>
  )
}

export default Setprofile