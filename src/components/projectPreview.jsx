import React from "react";

const ProjectPreview = ({ image, title, description }) => {
  return (
    <div className="projectPreview">
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="projectPreviewImage" src={image} />
    </div>
  );
};

export default ProjectPreview;
