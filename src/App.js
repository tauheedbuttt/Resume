import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Contact from './component/Contact';
import Education from './component/Education';
import Header from './component/Header';
import Project from './component/Project';
import Skills from './component/Skills';
import Summary from './component/Summary';
import Work from './component/Work';
import useResume from './hooks/useResume'

const App = () => {
  const { resume } = useSelector(state => state.resume);
  const { fetchResume } = useResume();


  useEffect(() => {
    fetchResume();
  }, [])

  return (
    <div>
      <div
        className="document doc-root fontsize fontface vmargins hmargins pagesize skn-trz7 TRZ7 ZTY"
        data-color="#1a409a"
      >
        <div id="CONTAINER_PARENT_0" className="topsection">
          <div id="CONTAINER_0">
            {/* <!-- Name --> */}
            <Header />
            {/* <!-- Sumarry --> */}
            <Summary />
          </div>
        </div>
        <div id="CONTAINER_PARENT_1" className="parentContainer">
          <div id="CONTAINER_1" className="left-box">
            {/* <!-- Contact --> */}
            <Contact />
            {/* <!-- Skills --> */}
            <Skills />
          </div>
          <div id="CONTAINER_2" className="right-box">
            {/* <!-- Work History --> */}
            <Work />
            {/* <!-- Education History --> */}
            <Education />
            {/* <!-- Projects --> */}
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App