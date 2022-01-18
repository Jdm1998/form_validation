import React from 'react'
import './User.css'
export const User = (props) => {
   console.log(props.user);
    return (
        <div className='heading'>

            <div className='name H'>
               { props.user.name}
            </div>
            <div className='age H'>
               { props.user.age}
            </div>
            <div className='phn H'>
               { props.user.phn}
            </div>
            <div className='email H'>
               { props.user.email}
            </div>

            
        </div>
    )
}
