import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Contact from './component/Contact';
import Education from './component/Education';
import Header from './component/Header';
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
            <div
              data-react-beautiful-dnd-draggable="1"
              className="sortable-item section-container SortableItem-sibling data-ACCM"
            >
              <div
                id="SECTION_ACCM39f0dab2-f2fa-44a2-9397-1df86dade22b"
                className="section SECTION_ACCM has-title"
                data-section-cd="ACCM"
              >
                <div className="doc-item">
                  <div className="heading">
                    <div className="sectiontitle" id="SECTIONNAME_ACCM">
                      Projects
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div
                        id="PARAGRAPH_ACCM_57a4b0e4-8861-4068-bd1d-6f5effd9864e"
                        className="paragraph PARAGRAPH_ACCM firstparagraph"
                      >
                        <div className="clearfix doc-item">
                          <div className="singlecolumn" id="FIELD_FRFM">
                            <ul>
                              <li>
                                ERP, CRM and Complaint Management System for
                                Real Estate
                              </li>
                              <li>Admin Panels for Mobile Applications</li>
                              <li>Web Applications for AI Backends</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{ left: -22, right: -22 }}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App