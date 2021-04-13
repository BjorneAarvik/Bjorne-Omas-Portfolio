import avatar from "../assets/images/avatarImage.jpg";

const About = () => {
  return (
    <div id="about">
      <div id="aboutBorder" />
      <div>
        <div className="aboutText">
          <img alt="Bilde" src={avatar} className="profileImage" />
          <p>
            bjorneoma@gmail.com <br />
            957 84 182 <br />
            <a href="https://www.linkedin.com/in/bjørne-oma/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="aboutSkills">
          <div className="skills">
            <h2 className="skillTitle">CONFIDENT WITH</h2>
            <p className="skillsText">C#, Google Design Sprint, Figma, Unity</p>
          </div>
          <div className="skills">
            <h2 className="skillTitle">COMFORTABLE WITH</h2>
            <p className="skillsText">
              Python, Git, Javascript, HTML, CSS, React, Adobe XD, Blender, SQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
