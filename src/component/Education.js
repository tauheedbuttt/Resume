import React from 'react'
import { useSelector } from 'react-redux'

const Details = ({ item }) => {
    return (

        <div
            id="PARAGRAPH_EDUC_d141e3d4-1882-4e77-8f50-f0f29ef20528"
            className="paragraph datespara PARAGRAPH_EDUC firstparagraph"
        >
            <div className="clearfix doc-item">
                <div className="paddedline date-content">
                    <span className="jobdates" id="FIELD_GRST" format="%Y-%m">{new Date(item.starting).toLocaleDateString('en-GB', { month: '2-digit', year: 'numeric' })}</span>
                    <span dependency="GRST+GRED"> - </span>
                    <span className="jobdates" id="FIELD_GRED" format="%Y-%m">{item.ending ? new Date(item.ending).toLocaleDateString('en-GB', { month: '2-digit', year: 'numeric' }) : 'Current'}</span>
                </div>
                <div className="singlecolumn">
                    <span className="paddedline degreeGap txtBold" dependency="DGRE|STUY">
                        <span className="degree" id="FIELD_DGRE">{item.title}</span>
                    </span>
                    <div className="paddedline txtItl" dependency="SCIT|SSTA|SCHO">
                        <span className="companyname" id="FIELD_SCHO">{item.school}</span>
                    </div>
                    <span id="FIELD_FRFM">GPA: {item.score}</span>
                </div>
            </div>
        </div>
    )
}

const Education = () => {
    const { resume } = useSelector(state => state.resume);
    var education = resume.education[0]?.education;
    return (
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
                            {
                                education
                                    ?.slice()
                                    .sort((a, b) => (b.ending ? b.ending : Date.now()) - a.ending)
                                    .map((item, index) => (
                                        <Details item={item} key={index} />
                                    ))
                            }
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
    )
}

export default Education