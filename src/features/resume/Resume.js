import React, { useEffect } from 'react'

import Contact from './Contact';
import Education from './Education';
import Header from './Header';
import Project from './Project';
import Skills from './Skills';
import Summary from './Summary';
import Work from './Work';

import Screen from '../../components/Screen';
import Loader from '../../components/Loader';
import useResume from '../../hooks/useResume';

const Resume = () => {
    const { loading, fetchResume } = useResume();

    useEffect(() => {
        fetchResume()
    }, [])

    return (
        <Screen>
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
        </Screen>
    )
}

export default Resume