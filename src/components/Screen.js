import React from 'react'
import Navbar from './Navbar'

const Screen = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='resume-container d-flex align-items-center justify-content-center pt-5 pb-5 ps-5 pe-5'>
                {children}
            </div>
        </div>
    )
}

export default Screen