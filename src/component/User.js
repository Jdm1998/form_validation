import React from 'react'

export const User = (props) => {
   console.log(props.user);
    return (
        <div>

            <div className='Name'>
               { props.user.name}
            </div>
            <div className='Age'>
               { props.user.age}
            </div>
            <div className='phn'>
               { props.user.phn}
            </div>
            <div className='email'>
               { props.user.email}
            </div>

            
        </div>
    )
}
