import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {resume} = useSelector(state => state.resume);
    return (
        <div
            data-react-beautiful-dnd-draggable="0"
            className="sortable-item section-container SortableItem-sibling data-NAME"
        >
            <div
            id="SECTION_NAME91c03c7f-9486-44e8-bf23-c2dc3c0ed1e7"
            className="section SECTION_NAME notdraggable firstsection"
            data-section-cd="NAME"
            >
            <div className="doc-item">
                <div className="">
                <div className="">
                    <div
                    id="PARAGRAPH_NAME_1d416c4f-68b1-4dbb-9e54-3a0a594bca5d"
                    className="paragraph PARAGRAPH_NAME firstparagraph"
                    >
                    <div>
                        <div className="name word-break">
                        <span id="FIELD_FNAM">{resume?.header[0]?.name}</span>
                        </div>
                        <div className="resumeTitle" id="FIELD_DCTL">{resume?.header[0]?.designation}</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header