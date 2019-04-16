import React from 'react';

/**
 * @title : Section One Component
 * @desc  : This component manages the first section
 *          displayed on the Home component
 */

const SectionOne = ({ props }) => {
    return (
        <div className="section-one">
            <div className="section-grid-container-one">
                <div className="image-one parallax" />
                <div className="text-container">
                    <p className="title">
                        {"hello"}
                    </p>
                    <p className="p-text">
                        {"I am a software engineer currently working in san francisco, ca."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;
