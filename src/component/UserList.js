import React from 'react'
import {User} from './User'
import './UserList.css'
export const UserList = (props) => {
    
console.log(props)
    console.log(props.users);
    return (
        <div className='UserList'>

            <div className="heading">

                <div className='name H B'>Name</div>
                <div className='age H B'>Age</div>
                <div className='phn B H'>Phone No</div>
                <div className='email B H'>Email</div>
            </div>
           { props.users.map(user =>{
              return( 
           <User key= {user.key} user={user}/>
           
              )
           }      

    )
    }
        </div>
    )
}
