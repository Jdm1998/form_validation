import React from 'react'

export const Userform = () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        name
                    </label>
                </div>
                <div>
                    <input type='text'>

                    </input>
                </div>

                <div>
                    <label>
                        Age
                    </label>
                </div>
                <div>
                    <input type='number'>
                        
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
