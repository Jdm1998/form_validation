import React from 'react'
import './Userform.css'
export const Userform = (props) => {
    const user={};
   const namehandler=(event)=>{
        user.name=event.target.value;
    }
   const agehandler=(event)=>{
        user.age=event.target.value;
    }
   const phnhandler=(event)=>{
        user.phn=event.target.value;
    }
   const emailhandler=(event)=>{
        user.email=event.target.value;
    }
    const submithandler=(event)=>{
        event.preventDefault();
        props.setusers(user);
        
    }
    return (
        <div className='userForm'>
            <form onSubmit={submithandler}>

                <div className='heading'>
                    User Form
                </div>
                <div className='formName'>
                    <label>
                        name
                    </label>
                </div>
                <div className='formNameI'>
                    <input type='text' onChange={namehandler}>

                    </input>
                </div>

                <div className='formAge'>
                    <label>
                        Age
                    </label>
                </div>
                <div className='formAgeI'>
                    <input type='number' onChange={agehandler}>
                        
                    </input>
                </div>
                <div className='formPhn'>
                    <label>
                        Phone No
                    </label>
                </div>
                <div className='formPhnI'>
                    <input type='number' onChange={phnhandler}>
                        
                    </input>
                </div>

                <div className='formEmail'>
                    <label>
                        Email Address
                    </label>
                </div>
                <div className='formEmailI'>
                    <input type='text' onChange={emailhandler}>
                        
                    </input>
                </div>
               
               
                <div>
                    <button type='submit'>
                        submit
                    </button>
                </div>
            </form>
        </div>
    )
}
