import { Link } from "react-router-dom";

const ProjectPreview = ({ image, title, description, url }) => {
  return (
    <Link to={url}>
      <span style={{ display: "block" }}>
        <div className="projectPreview">
          <h2 className="projectPreviewTitle">{title}</h2>
          <img className="projectPreviewImage" src={image} />
        </div>
      </span>
    </Link>
  );
};

export default ProjectPreview;
