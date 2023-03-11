import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Contact from './component/Contact';
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
            <div
              data-react-beautiful-dnd-draggable="1"
              className="sortable-item section-container SortableItem-sibling data-EDUC"
            >
              <div
                id="SECTION_EDUC93e2fec3-ef3f-42dc-9a7c-f480e0060293"
                className="section education SECTION_EDUC multi-para has-title"
                data-section-cd="EDUC"
              >
                <div className="doc-item">
                  {/* <!-- Education Title --> */}
                  <div className="heading">
                    <div className="sectiontitle" id="SECTIONNAME_EDUC">
                      Education
                    </div>
                  </div>
                  {/* <!-- Education List --> */}
                  <div className="">
                    <div className="sortableInner">
                      <div
                        id="PARAGRAPH_EDUC_d141e3d4-1882-4e77-8f50-f0f29ef20528"
                        className="paragraph datespara PARAGRAPH_EDUC firstparagraph"
                      >
                        <div className="clearfix doc-item">
                          <div
                            className="paddedline date-content hidedates"
                            dependency="GRST|GRED"
                          >
                            <span className="jobdates" dependency="GRST"
                            >2007-03</span
                            ><span dependency="GRST+GRED"> - </span>
                            <span className="jobdates" dependency="GRED"
                            >2007-03</span
                            >
                          </div>
                          <div className="paddedline date-content">
                            <span
                              className="jobdates"
                              id="FIELD_GRST"
                              format="%Y-%m"
                            >2019-02</span
                            ><span dependency="GRST+GRED"> - </span>
                            <span
                              className="jobdates"
                              id="FIELD_GRED"
                              format="%Y-%m"
                            >2023-02</span
                            >
                          </div>
                          <div className="singlecolumn">
                            <span
                              className="paddedline degreeGap txtBold"
                              dependency="DGRE|STUY"
                            >
                              <span className="degree" id="FIELD_DGRE">BS</span
                              ><span dependency="DGRE+STUY">: </span
                              ><span className="programline" id="FIELD_STUY"
                              >Computer Science</span
                              >
                            </span>
                            <div
                              className="paddedline txtItl"
                              dependency="SCIT|SSTA|SCHO"
                            >
                              <span className="companyname" id="FIELD_SCHO"
                              >Bahria University</span
                              ><span dependency="SCHO+SSTA|SCIT"> - </span
                              ><span className="joblocation jobcity" id="FIELD_SCIT"
                              >Islamabad</span
                              ><span
                                className="joblocation jobstate"
                                id="FIELD_SSTA"
                              ></span>
                            </div>
                            <span id="FIELD_FRFM">GPA: 3.43</span>
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
                      <div
                        id="PARAGRAPH_EDUC_64b5bac5-df5f-4f08-babb-f02626766805"
                        className="paragraph datespara PARAGRAPH_EDUC"
                      >
                        <div className="clearfix doc-item">
                          <div
                            className="paddedline date-content hidedates"
                            dependency="GRST|GRED"
                          >
                            <span className="jobdates" dependency="GRST"
                            >2007-03</span
                            ><span dependency="GRST+GRED"> - </span>
                            <span className="jobdates" dependency="GRED"
                            >2007-03</span
                            >
                          </div>
                          <div className="paddedline date-content">
                            <span
                              className="jobdates"
                              id="FIELD_GRST"
                              format="%Y-%m"
                            >2015-09</span
                            ><span dependency="GRST+GRED"> - </span>
                            <span
                              className="jobdates"
                              id="FIELD_GRED"
                              format="%Y-%m"
                            >2018-08</span
                            >
                          </div>
                          <div className="singlecolumn">
                            <span
                              className="paddedline degreeGap txtBold"
                              dependency="DGRE|STUY"
                            >
                              <span className="degree" id="FIELD_DGRE"
                              >A' Level</span
                              ><span className="programline" id="FIELD_STUY"></span>
                            </span>
                            <div
                              className="paddedline txtItl"
                              dependency="SCIT|SSTA|SCHO"
                            >
                              <span className="companyname" id="FIELD_SCHO"
                              >The City School</span
                              ><span dependency="SCHO+SSTA|SCIT"> - </span
                              ><span className="joblocation jobcity" id="FIELD_SCIT"
                              >Islamabad, IBCC</span
                              ><span
                                className="joblocation jobstate"
                                id="FIELD_SSTA"
                              ></span>
                            </div>
                            <span id="FIELD_FRFM">GPA: 79.5</span>
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
                <div
                  className="doc-overlay section-overlay"
                  style={{ left: -22, right: -22 }}
                >
                  <span>&nbsp;</span>
                </div>
              </div>
            </div>
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