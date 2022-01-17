import React from 'react'
import {User} from './User'
import './UserList.css'
export const UserList = (props) => {
    
console.log(props)
    return (
        <div className='UserList'>

            <div className="heading">

                <div className='name H'>Name</div>
                <div className='age H'>Age</div>
                <div className='phn H'>Phone No</div>
                <div className='email H'>Email</div>
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
