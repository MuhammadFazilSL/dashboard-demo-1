import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/favicon.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { sidebaricon } from '../topnav/TopNav'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''
  

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

export const handlesidebar =()=>{
    
let sidebar ="close";
 
    const sidebartoggleid = document.getElementById('sidebartoggleid')
  if(sidebartoggleid.classList.contains('visible')){

    sidebartoggleid.classList.remove('visible')
    sidebar="close"
  }else{
    sidebartoggleid.classList.add('visible')
    sidebar ="open"
  }
  return sidebar
}

const Sidebar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    console.log(props)
   
    return (
        <div className='sidebar' id='sidebartoggleid'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
                <p>Fashion World</p>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                    
                ))
            }
        </div>
    )
}

export default Sidebar
