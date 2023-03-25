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
                                work
                                    ?.slice()
                                    .sort((a, b) => (b.ending ? b.ending : Date.now()) - a.ending)
                                    .map((item, index) => (
                                        <Details key={index} work={item} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work