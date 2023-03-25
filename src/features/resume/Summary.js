import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
    const {resume} = useSelector(state => state.resume);
    return (
        <div
            data-react-beautiful-dnd-draggable="0"
            className="sortable-item section-container SortableItem-sibling data-SUMM"
        >
            <div
            id="SECTION_SUMM4eaba89a-a184-4666-a5e5-83b6426660e7"
            className="section summary notdraggable SECTION_SUMM"
            data-section-cd="SUMM"
            >
            <div className="doc-item">
                <div className="">
                <div className="">
                    <div
                    id="PARAGRAPH_SUMM_c1675158-b3cd-4c62-a9bd-bb61ded48c6f"
                    className="paragraph PARAGRAPH_SUMM firstparagraph"
                    >
                    <div className="clearfix doc-item">
                        <div className="singlecolumn" id="FIELD_FRFM">
                        <p>{resume?.header[0]?.summary}</p>
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

export default Summary