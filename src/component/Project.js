import React from 'react'
import { useSelector } from 'react-redux'

const Project = () => {
    const { resume } = useSelector(state => state.resume);
    var projects = resume.projects[0]?.projects;
    return (
        <div data-react-beautiful-dnd-draggable="1" className="sortable-item section-container SortableItem-sibling data-ACCM">
            <div id="SECTION_ACCM39f0dab2-f2fa-44a2-9397-1df86dade22b" className="section SECTION_ACCM has-title" data-section-cd="ACCM">
                <div className="doc-item">
                    {/* Title */}
                    <div className="heading">
                        <div className="sectiontitle" id="SECTIONNAME_ACCM">
                            Projects
                        </div>
                    </div>
                    {/* List */}
                    <div className="">
                        <div className="">
                            <div id="PARAGRAPH_ACCM_57a4b0e4-8861-4068-bd1d-6f5effd9864e" className="paragraph PARAGRAPH_ACCM firstparagraph">
                                <div className="clearfix doc-item">
                                    <div className="singlecolumn" id="FIELD_FRFM">
                                        <ul> {projects?.map((item, index) => <li key={index}>{item}</li>)} </ul>
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

export default Project