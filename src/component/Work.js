import React from 'react'
import { useSelector } from 'react-redux'

const Details = ({ work }) => {
    return (
        <div
            id="PARAGRAPH_EXPR_5e283133-9666-4339-9c85-582ad16cc2ae"
            className="paragraph datespara PARAGRAPH_EXPR firstparagraph"
        >
            <div className="clearfix doc-item">
                <div
                    className="paddedline date-content"
                    dependency="JSTD|EDDT"
                >
                    <span
                        className="jobdates"
                        id="FIELD_JSTD"
                        format="%Y-%m"
                    >{new Date(work.starting).toLocaleDateString('en-GB', { month: '2-digit', year: 'numeric' })}</span>
                    <span dependency="JSTD+EDDT"> - </span>
                    <span
                        className="jobdates"
                        id="FIELD_EDDT"
                        format="%Y-%m"
                    >{work.ending ? new Date(work.ending).toLocaleDateString('en-GB', { month: '2-digit', year: 'numeric' }) : 'Current'}</span>
                </div>
                <div className="singlecolumn">
                    <span className="paddedline" dependency="JTIT">
                        <span className="jobtitle txtBold" id="FIELD_JTIT">{work.title}</span>
                    </span>
                    <span
                        className="paddedline locationGap txtItl"
                        dependency="COMP|JSTA|JCIT"
                    >
                        <span className="companyname" id="FIELD_COMP">{work.company}</span>
                        <span className="jobcity" id="FIELD_JCIT"></span>
                        <span className="jobstate" id="FIELD_JSTA"></span>
                    </span>
                    <span className="jobline" id="FIELD_JDES">
                        <ul>
                            {work?.description?.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

const Work = () => {
    const { resume } = useSelector(state => state.resume);
    var work = resume.experience[0]?.work;
    return (

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
                            {
                                work?.map((item, index) => (
                                    <Details work={item} />
                                ))
                            }
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
                                    style={{ left: -22, right: -22 }}
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
    )
}

export default Work