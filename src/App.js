import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Contact from './component/Contact';
import Header from './component/Header';
import Summary from './component/Summary';
import useResume from './hooks/useResume'

const App = () => {
  const {resume} = useSelector(state => state.resume); 
  const {fetchResume} = useResume();


  useEffect(()=>{
    fetchResume();
  },[])

  return (
    <div>
      <div
        className="document doc-root fontsize fontface vmargins hmargins pagesize skn-trz7 TRZ7 ZTY"
        data-color="#1a409a"
      >
        <div id="CONTAINER_PARENT_0" className="topsection">
          <div id="CONTAINER_0">
            {/* <!-- Name --> */}
            <Header/>
            {/* <!-- Sumarry --> */}
            <Summary/>
          </div>
        </div>
        <div id="CONTAINER_PARENT_1" className="parentContainer">
          <div id="CONTAINER_1" className="left-box">
            {/* <!-- Contact --> */}
            <Contact/>
            {/* <!-- Skills --> */}
            <div
              data-react-beautiful-dnd-draggable="1"
              className="sortable-item section-container SortableItem-sibling data-HILT"
            >
              <div
                id="SECTION_HILT5d849774-1a4f-4ae6-a96a-fb0dc9d8f462"
                className="section SECTION_HILT has-title"
                data-section-cd="HILT"
              >
                <div className="doc-item">
                  {/* <!-- Skill Heading --> */}
                  <div className="heading">
                    <div className="sectiontitle" id="SECTIONNAME_HILT">Skills</div>
                  </div>
                  {/* <!-- Skill List --> */}
                  <div className="">
                    <div className="sortableInner">
                      <div
                        id="PARAGRAPH_HILT_e912effe-7ec5-4c4b-8e6f-f43653bdf71e"
                        className="paragraph PARAGRAPH_HILT firstparagraph"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              React/React Native
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Excellent</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_fa6ee2c5-4f0b-44ec-af80-bb5296f87409"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>MongoDB</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Very Good</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_6ae9e22a-1087-4ecd-aa86-bbcc50faa84d"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>NodeJS</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Excellent</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_2b0ac891-f5d6-4e14-9a0e-2005b8290228"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>JavaScript</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Excellent</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_a55b5bf2-32d2-4f2b-994b-3ca6f8037f82"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>C++</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Good</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_e47afecd-f268-4143-8a37-90197f043881"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>SQL</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Average</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_f453fa8d-db59-4954-919e-7df5fe1544ff"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              HTML CSS
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Very Good</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_0ab4190c-0e4e-9cd3-3b47-ee9209e1b878"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>Python</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Very Good</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_561ce8d1-1fee-e606-887f-035cf41dd276"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>Java</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Average</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_e84a7dd7-bcb4-5382-b43e-533d73b73415"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>C#</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Average</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_cb51a900-00d6-a1e3-bfcd-fec3e0175c6d"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>Flutter</p>
                            </div>
                            <div dependency="RATV|RATT" className="ratingWrapper">
                              <div className="noLnht">
                                <svg
                                  viewBox="0 0 500 100"
                                  id="FIELD_RATV"
                                  type="count"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="150"
                                    cy="50"
                                    r="40"
                                    fill="#1a409a"
                                    stroke-width="4"
                                    className="default-fill"
                                  ></circle>
                                  <circle
                                    cx="250"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="350"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                  <circle
                                    cx="450"
                                    cy="50"
                                    r="40"
                                    fill="#fff"
                                    stroke-width="4"
                                  ></circle>
                                </svg>
                              </div>
                              <span className="paddedline" id="FIELD_RATT"
                                >Average</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_HILT_ac19739d-f0a0-3011-8fb0-879306d3f27e"
                        className="paragraph PARAGRAPH_HILT"
                      >
                        <div className="clearfix doc-item">
                          <div className="ratingRow">
                            <div className="ratingText" id="FIELD_SKC1">
                              <p>ExpressJS</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
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
                  style={{left: -22, right: -22}}
                >
                  <span>&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
          <div id="CONTAINER_2" className="right-box">
            {/* <!-- Work History --> */}
            <div
              data-react-beautiful-dnd-draggable="1"
              className="sortable-item section-container SortableItem-sibling data-EXPR"
            >
              <div
                id="SECTION_EXPR246c480e-15ee-47ca-8f9a-48499da52d1e"
                className="section experience SECTION_EXPR multi-para has-title"
                data-section-cd="EXPR"
              >
                <div className="doc-item">
                  {/* <!-- Work History Title --> */}
                  <div className="heading">
                    <div className="sectiontitle" id="SECTIONNAME_EXPR">
                      Work History
                    </div>
                  </div>
                  {/* <!-- Work History List --> */}
                  <div className="">
                    <div className="sortableInner">
                      <div
                        id="PARAGRAPH_EXPR_5e283133-9666-4339-9c85-582ad16cc2ae"
                        className="paragraph datespara PARAGRAPH_EXPR firstparagraph"
                      >
                        <div className="clearfix doc-item">
                          <div
                            className="paddedline date-content hidedates"
                            dependency="JSTD|EDDT"
                          >
                            <span className="jobdates" dependency="JSTD"
                              >2007-03</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span className="jobdates" dependency="EDDT"
                              >2007-03</span
                            >
                          </div>
                          <div
                            className="paddedline date-content"
                            dependency="JSTD|EDDT"
                          >
                            <span
                              className="jobdates"
                              id="FIELD_JSTD"
                              format="%Y-%m"
                              >2022-01</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span
                              className="jobdates"
                              id="FIELD_EDDT"
                              format="%Y-%m"
                              >Current</span
                            >
                          </div>
                          <div className="singlecolumn">
                            <span className="paddedline" dependency="JTIT">
                              <span className="jobtitle txtBold" id="FIELD_JTIT"
                                >Full Stack Developer</span
                              >
                            </span>
                            <span
                              className="paddedline locationGap txtItl"
                              dependency="COMP|JSTA|JCIT"
                            >
                              <span className="companyname" id="FIELD_COMP"
                                >PrograminStudio</span
                              ><span className="jobcity" id="FIELD_JCIT"></span
                              ><span className="jobstate" id="FIELD_JSTA"></span>
                            </span>
                            <span className="jobline" id="FIELD_JDES"
                              ><ul>
                                <li>Create new Mobile Apps using MERN stack</li>
                                <li>
                                  Creating new E-Commerce Mobile Applications
                                </li>
                                <li>Maintaining previous built applications</li>
                                <li>
                                  Creating new and integrating changed backend
                                  for applications.
                                </li>
                              </ul></span
                            >
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_EXPR_e2b35f7d-941d-41a5-9b14-3e4bacee3dc6"
                        className="paragraph datespara PARAGRAPH_EXPR"
                      >
                        <div className="clearfix doc-item">
                          <div
                            className="paddedline date-content hidedates"
                            dependency="JSTD|EDDT"
                          >
                            <span className="jobdates" dependency="JSTD"
                              >2007-03</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span className="jobdates" dependency="EDDT"
                              >2007-03</span
                            >
                          </div>
                          <div
                            className="paddedline date-content"
                            dependency="JSTD|EDDT"
                          >
                            <span
                              className="jobdates"
                              id="FIELD_JSTD"
                              format="%Y-%m"
                              >2022-08</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span
                              className="jobdates"
                              id="FIELD_EDDT"
                              format="%Y-%m"
                              >2022-11</span
                            >
                          </div>
                          <div className="singlecolumn">
                            <span className="paddedline" dependency="JTIT">
                              <span className="jobtitle txtBold" id="FIELD_JTIT"
                                >React Native Intern</span
                              >
                            </span>
                            <span
                              className="paddedline locationGap txtItl"
                              dependency="COMP|JSTA|JCIT"
                            >
                              <span className="companyname" id="FIELD_COMP"
                                >PrograminStudio</span
                              ><span className="jobcity" id="FIELD_JCIT"></span
                              ><span className="jobstate" id="FIELD_JSTA"></span>
                            </span>
                            <span className="jobline" id="FIELD_JDES"
                              ><ul>
                                <li>
                                  Integrated existing application with diﬀerent
                                  backend
                                </li>
                                <li>
                                  Provided new features to existing company's
                                  mobile applications.
                                </li>
                              </ul></span
                            >
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
                        >
                          <span className="badge badge-primary badge-edit"></span
                          ><span>&nbsp;</span>
                        </div>
                      </div>
                      <div
                        id="PARAGRAPH_EXPR_c0ec29e0-d8a6-4ec3-9e3c-7f80b1218bbb"
                        className="paragraph datespara PARAGRAPH_EXPR"
                      >
                        <div className="clearfix doc-item">
                          <div
                            className="paddedline date-content hidedates"
                            dependency="JSTD|EDDT"
                          >
                            <span className="jobdates" dependency="JSTD"
                              >2007-03</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span className="jobdates" dependency="EDDT"
                              >2007-03</span
                            >
                          </div>
                          <div
                            className="paddedline date-content"
                            dependency="JSTD|EDDT"
                          >
                            <span
                              className="jobdates"
                              id="FIELD_JSTD"
                              format="%Y-%m"
                              >2021-09</span
                            ><span dependency="JSTD+EDDT"> - </span
                            ><span
                              className="jobdates"
                              id="FIELD_EDDT"
                              format="%Y-%m"
                              >2021-10</span
                            >
                          </div>
                          <div className="singlecolumn">
                            <span className="paddedline" dependency="JTIT">
                              <span className="jobtitle txtBold" id="FIELD_JTIT"
                                >Software Intern</span
                              >
                            </span>
                            <span
                              className="paddedline locationGap txtItl"
                              dependency="COMP|JSTA|JCIT"
                            >
                              <span className="companyname" id="FIELD_COMP"
                                >National Development Complex, NESCOM</span
                              ><span className="jobcity" id="FIELD_JCIT"></span
                              ><span className="jobstate" id="FIELD_JSTA"></span>
                            </span>
                            <span className="jobline" id="FIELD_JDES"
                              ><ul>
                                <li>
                                  Worked on a Point of Sale - Desktop
                                  Application using C# and SQL Server
                                </li>
                                <li>
                                  Application kept record of all the sales that
                                  are being made at the speciﬁc organization.
                                </li>
                              </ul></span
                            >
                          </div>
                        </div>
                        <div
                          className="doc-overlay para-overlay"
                          style={{left: -22, right: -22}}
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
                          style={{left: -22, right: -22}}
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
                          style={{left: -22, right: -22}}
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
                  style={{left: -22, right: -22}}
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
                          style={{left: -22, right: -22}}
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