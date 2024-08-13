import React from 'react';

const ExperienceItem = ({title, company, date, description}) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{company} | {date}</p>
        <p className="mt-2">{description}</p>
    </div>
);

const Experience = ({experiences}) => {
    console.log(experiences)
    return(
    <div>
        {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
            
        ))}
    </div>
    )

};
export default Experience;