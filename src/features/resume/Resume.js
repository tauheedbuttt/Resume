import React, { useEffect, useState } from 'react'

import Contact from '../../component/Contact';
import Education from '../../component/Education';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Project from '../../component/Project';
import Skills from '../../component/Skills';
import Summary from '../../component/Summary';
import Work from '../../component/Work';

import useResume from '../../hooks/useResume'

const App = () => {
    const [loading, setLoading] = useState(true);
    const { fetchResume } = useResume();

    useEffect(() => {
        setLoading(true);
        fetchResume(() => setLoading(false))
    }, [])

    return (
        <div className='resume-container d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100vh' }}>
            <Loader loading={loading}>
                <div className="shadow-lg p-3 bg-white rounded document doc-root fontsize fontface vmargins hmargins pagesize skn-trz7 TRZ7 ZTY" data-color="#1a409a">
                    <div id="CONTAINER_PARENT_0" className="topsection w-100">
                        <div id="CONTAINER_0">
                            <Header />
                            <Summary />
                        </div>
                    </div>
                    <div id="CONTAINER_PARENT_1" className="parentContainer">
                        <div id="CONTAINER_1" className="left-box">
                            <Contact />
                            <Skills />
                        </div>
                        <div id="CONTAINER_2" className="right-box">
                            <Work />
                            <Education />
                            <Project />
                        </div>
                    </div>
                </div>
            </Loader>
        </div>
    )
}

export default App