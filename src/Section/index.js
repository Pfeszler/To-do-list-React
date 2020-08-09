import React from "react"
import "./style.css"


const Section = ({ title, body, extraHeaderContent }) => (
    <section
        className="section"
    >
        <div
            className="section__headerContainer"
        >
            <h2
                className="section__header"
            >
                {title}
            </h2>
            {extraHeaderContent}
        </div>
        <div
            className="section__body"
        >
            {body}
        </div>

    </section>
)


export default Section