import React from "react";

const ProjectItem = ({title, link, date, description, imageurl}) => (
    <a className="mb-6">
        {/* <img src={imageurl}/> */}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{date} |  {description}</p>
    </a>
);

const Project = ({projects}) => {
    return(
        <div>
             {projects.map((proj, index) => (
                <ProjectItem key={index} {...proj} />
        ))}
        </div>
    );
};
export default Project;
