import React from 'react'
import { useSelector } from 'react-redux'

const Field = ({ title, value, dependency }) => {
    const isLink = value && (value.startsWith('http://') || value.startsWith('https://'));
    return (
        <div dependency={dependency}>
            <div className="txtBold mt-1">
                <span className="xslt_static_change">{title}</span>
            </div>
            {isLink ? (
                <a href={value} id="FIELD_ADDR">{value.replace(/(^\w+:|^)\/\//, '')}</a>
            ) : (
                <span id="FIELD_ADDR">{value}</span>
            )}
        </div>
    )
}

const Contact = () => {
    const { resume } = useSelector(state => state.resume);

    const fields = [
        {
            title: 'Address',
            value: `${resume?.contact[0]?.address?.city}, ${resume?.contact[0]?.address?.country}`,
            dependency: 'STRT|CITY|STAT|ZIPC|ADDR'
        },
        {
            title: 'Phone',
            value: `${resume?.contact[0]?.phone}`,
            dependency: 'HPHN|CPHN'
        },
        {
            title: 'E-mail',
            value: `${resume?.contact[0]?.email}`,
            dependency: 'EMAI'
        },
        {
            socials: resume?.contact[0]?.socials.map(item => {
                return {
                    title: item.title,
                    value: item.value,
                    dependency: 'SOCL',
                }
            })
        }
    ]

    return (
        <div data-react-beautiful-dnd-draggable="1" className="sortable-item section-container SortableItem-sibling data-CNTC">
            <div id="SECTION_CNTC3bafdb5e-c96c-4413-83a1-04984776c698" className="section SECTION_CNTC notdraggable has-title" data-section-cd="CNTC">
                <div className="doc-item">
                    <div className="heading">
                        <div className="sectiontitle" id="SECTIONNAME_CNTC">Contact</div>
                    </div>
                    <div className="">
                        <div className="">
                            <div id="PARAGRAPH_CNTC_df2e4136-2197-457e-92f0-d747c0ecf8c1" className="paragraph PARAGRAPH_CNTC firstparagraph">
                                <div className="clearfix doc-item">
                                    <div className="address">
                                        <div className="singlecolumn">
                                            {
                                                fields?.map((item, index) => (
                                                    item?.socials
                                                        ? item.socials?.map((social, idx) => (
                                                            <Field key={idx} value={social.value} title={social.title} dependency={social.dependency} />
                                                        ))
                                                        : <Field key={index} value={item.value} title={item.title} dependency={item.dependency} />
                                                ))
                                            }
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

export default Contact