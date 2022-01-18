
import React from 'react'
import { useState } from 'react';
import { ErrooModal } from './ErrooModal';
import './Userform.css'
export const Userform = (props) => {
    const [user,setuser]=useState({name:'',
    age:'',
        email:'',
        phn:''});
    
        const[err,errupdate]=useState();


   const namehandler=(event)=>{
        setuser({...user,name:event.target.value});
    }

   const agehandler=(event)=>{
    setuser({...user,age:event.target.value});
    }

   const phnhandler=(event)=>{
    setuser({...user,phn:event.target.value});
    }

   const emailhandler=(event)=>{
    setuser({...user,email:event.target.value,key:Math.random()*100});
    
    
    }
    const reseterr=()=>{
        errupdate(null);
    }
    const submithandler=(event)=>{
      
        event.preventDefault();
        if(user.name.trim().length===0||user.age.trim().length===0||user.age.trim().length===0||user.email.trim().length===0)
        {
            errupdate({title:'Empty value', message:'please provide all information'})
            return;
        }
        if(+user.age<18)
        {
            errupdate({title:'Under Age', message:'Age must be equal or greater than 18'})
            return;
        }
         console.log("user details");
         console.log(user);
        
        props.setusers(user);
        setuser({name:'',
                age:'',
                    email:'',
                    phn:''});
                   
    }
    return (
        <div className='userForm'>
            

            {  err&&  <ErrooModal err={err} rst={reseterr}></ErrooModal>
}
            <form onSubmit={submithandler}>

                <div className='headingF'>
                    User Form
                </div>
                <div className='formName'>
                    <label>
                        name
                    </label>
                </div>
                <div className='formNameI'>
                    <input type='text' value={user.name} onChange={namehandler}>

                    </input>
                </div>

                <div className='formAge'>
                    <label>
                        Age
                    </label>
                </div>
                <div className='formAgeI'>
                    <input type='number' value={user.age} onChange={agehandler}>
                        
                    </input>
                </div>
                <div className='formPhn'>
                    <label>
                        Phone No
                    </label>
                </div>
                <div className='formPhnI'>
                    <input type='number' value={ user.phn} onChange={phnhandler}>
                        
                    </input>
                </div>

                <div className='formEmail'>
                    <label>
                        Email Address
                    </label>
                </div>
                <div className='formEmailI'>
                    <input type='text'  value={user.email} onChange={emailhandler}>
                        
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
