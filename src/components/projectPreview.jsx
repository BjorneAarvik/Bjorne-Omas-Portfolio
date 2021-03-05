import { Link } from "react-router-dom";

const ProjectPreview = ({ image, title, description, url }) => {
  return (
    <Link to={url}>
      <span style={{ display: "block" }}>
        <div className="projectPreview">
          <img className="projectPreviewImage" src={image} />
          <p className="projectPreviewTitle">{title}</p>
          <p className="projectPreviewText">{description}</p>
          <p className="clickToSeeMore">Click To Read More</p>
        </div>
      </span>
    </Link>
  );
};

export default ProjectPreview;
