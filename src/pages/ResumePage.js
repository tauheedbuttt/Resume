import React, { useEffect } from 'react'

import useResume from '../hooks/useResume'
import { downloadPDF } from '../config/functions'

import Resume from '../features/resume/Resume'
import Loader from '../component/Loader'

const ResumePage = () => {
    const { loading, fetchResume } = useResume();

    useEffect(() => {
        fetchResume()
    }, [])
    return (
        <div className='resume-container d-flex align-items-center justify-content-center pt-5 pb-5 ps-5 pe-5' style={{ width: '100%', height: '100vh' }}>
            {/* <div className='d-flex flex-column justify-content-between w-50 h-100 p-5 border border-2 border-danger '>
                <div></div>
                <button onClick={() => downloadPDF(`Tauheed's Resume`, <Resume />)} className='btn btn-danger w-100'>Download PDF</button>
            </div> */}
            <Loader loading={loading}>
                <Resume />
            </Loader>
        </div>
    )
}

export default ResumePage