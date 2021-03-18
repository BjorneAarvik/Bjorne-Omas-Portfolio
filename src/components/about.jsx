import avatar from "../assets/images/avatarImage.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="sectionHeader">About</h1>
      <div>
        <div className="aboutText">
          <img alt="Bilde" src={avatar} className="avatar" />
          <p>
            My name is Bjørne Oma. I am 22 years old, and currently live in
            Bergen, where I am taking a bachelors degree in Media- and
            Interaction Design. I love making games, and I also love making
            software that makes people's lives easier.
          </p>
          <p>
            bjorneoma@gmail.com <br />
            957 84 182 <br />
            <a href="https://www.linkedin.com/in/bjørne-oma/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="aboutSkills">
          <div className="skill programming">
            <div className="circle huge">Programming</div>
            <div className="tools">
              <div className="bigTools">
                <div className="circle big">C#</div>
                <div className="circle big">Git</div>
              </div>
              <div className="smallTools">
                <div className="circle small">Javascript</div>
                <div className="circle small">Python</div>
                <div className="circle small">CSS</div>
                <div className="circle small">React</div>
                <div className="circle small">HTML</div>
              </div>
            </div>
          </div>
          <div className="skill ux">
            <div className="circle huge">UX Design</div>
            <div className="tools">
              <div className="bigTools">
                <div className="circle big">
                  Google
                  <br /> Design
                  <br /> Sprint
                </div>
                <div className="circle big">Figma</div>
                <div className="circle big">
                  User
                  <br /> Testing
                </div>
              </div>
              <div className="smallTools">
                <div className="circle small">Adobe XD</div>
                <div className="circle small">
                  Design
                  <br /> Thinking
                </div>
              </div>
            </div>
          </div>
          <div className="skill gameDev">
            <div className="circle huge">
              Game
              <br />
              Development
            </div>
            <div className="tools">
              <div className="bigTools">
                <div className="circle big">Unity</div>
                <div className="circle big">C#</div>
              </div>
              <div className="smallTools">
                <div className="circle small">Blender</div>
                <div className="circle small">Krita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
