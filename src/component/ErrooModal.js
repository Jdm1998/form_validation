import React from 'react'
import './ErrorModal.css'

export const ErrooModal = (props) => {
    return (
        <div>
            <div className='backgrd' onClick={props.rst}>
                <div className='modal'>
                    <header className='header'>
                        <h2>{props.err.title}</h2>
                    </header>
                    <div className='message'>
                        <p>{props.err.message}</p>

                    </div>
                    <footer className='btn'>
                        <button type='submit' onClick={props.rst}>Ok</button>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}
