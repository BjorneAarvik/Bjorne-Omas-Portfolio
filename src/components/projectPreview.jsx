import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

const ProjectPreview = ({ image, title, url }) => {
  const history = useHistory();

  function routeToHome(url) {
    history.push(url);
  }

  return (
    <Link
      to="projectPlacement"
      spy={true}
      smooth={true}
      duration={500}
      onClick={() => routeToHome(url)}
    >
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
