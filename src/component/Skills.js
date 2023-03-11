import React from 'react'
import { useSelector } from 'react-redux'

const Rating = ({ rating }) => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div className="noLnht">
            <svg viewBox="0 0 500 100" id="FIELD_RATV" type="count">
                {
                    arr.map((item, index) => (
                        <circle
                            key={index}
                            cx={50 + (100 * index)}
                            cy="50"
                            r="40"
                            fill={item <= rating ? "#1a409a" : "#fff"}
                            stroke-width="4"
                            className={item <= rating ? "default-fill" : ""}
                        />
                    ))
                }
            </svg>
        </div>
    )
}

const Skill = ({ skill }) => {
    const rate =
        skill.rating == 5 ? 'Excellent' :
            skill.rating == 4 ? 'Very Good' :
                skill.rating == 3 ? 'Good' :
                    skill.rating == 2 ? 'Average' :
                        skill.rating == 1 ? 'Not Good' : 'N/A'
    return (
        <div
            id="PARAGRAPH_HILT_e912effe-7ec5-4c4b-8e6f-f43653bdf71e"
            className="paragraph PARAGRAPH_HILT firstparagraph mb-2"
        >
            <div className="clearfix doc-item">
                <div className="ratingRow">
                    <div className="ratingText" id="FIELD_SKC1">
                        {skill.title}
                    </div>
                    <div dependency="RATV|RATT" className="ratingWrapper">
                        <Rating rating={skill.rating} />
                        <span className="paddedline" id="FIELD_RATT">{rate}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Skills = () => {
    const { resume } = useSelector(state => state.resume);
    var skills = resume.skills[0]?.skills;
    return (
        <div
            data-react-beautiful-dnd-draggable="1"
            className="sortable-item section-container SortableItem-sibling data-HILT mt-2"
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
                            {
                                skills
                                    ?.slice()
                                    ?.sort((a, b) => b.rating - a.rating)
                                    ?.map((item, index) => (
                                        <Skill skill={item} key={index} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills