import React from 'react';

const Item = (props)=>{
    return(
                   <li className={props.glass}>{props.detail.name}

                    <a className='del' href="javascript:void(0)" onClick={()=>{
                    props.deleteTask(props.index)
                    }}>x</a>
                   </li> 
    )
}

export default Item;