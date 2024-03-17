import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    
    let color = "transparent";
    let bgcolors ="transparent"

    const fontcolor =(props)=>{
        if(props===0){
            color = "#455560"
        }
        if(props===1){
            color = "white"
        }
        if(props===2){
            color = "white"
        }
        if(props===3){
            color = "#455560"
        }
        return color 
    }
    
    const bgcolor =(props)=>{
        if(props===0){
            bgcolors = "white"
        }
        if(props===1){
            bgcolors = "#7d7de6"
        }
        if(props===2){
            bgcolors = "#7d7de6"
        }
        if(props===3){
            bgcolors = "white"
        }
        return bgcolors 
    }
    return (
        <div className='status-card' style={{backgroundColor:`${bgcolor(props.index)}`,color:`${fontcolor(props.index)}`}}>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
