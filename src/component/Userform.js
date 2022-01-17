import React from 'react'
import './Userform.css'
export const Userform = () => {
    return (
        <div className='userForm'>
            <form>

                <div className='heading'>
                    User Form
                </div>
                <div className='formName'>
                    <label>
                        name
                    </label>
                </div>
                <div className='formNameI'>
                    <input type='text'>

                    </input>
                </div>

                <div className='formAge'>
                    <label>
                        Age
                    </label>
                </div>
                <div className='formAgeI'>
                    <input type='number'>
                        
                    </input>
                </div>
                <div className='formPhn'>
                    <label>
                        Phone No
                    </label>
                </div>
                <div className='formPhnI'>
                    <input type='number'>
                        
                    </input>
                </div>

                <div className='formEmail'>
                    <label>
                        Email Address
                    </label>
                </div>
                <div className='formEmailI'>
                    <input type='text'>
                        
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
