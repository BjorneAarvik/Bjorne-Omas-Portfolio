import jolaspelet2019 from "../assets/videos/Jolaspelet2019.mp4";
import jolaspeletVideo from "../assets/videos/Jolaspelet2020Gameplay.mp4";
import imgAction from "../assets/images/JolaspeletAction.png";
import imgHighScore from "../assets/images/JolaspeletHighScore.png";

const Jolaspelet = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">Jolaspelet 2020</h1>
      <p>
        Jolaspelet 2020 (translates to "The Christmas Game") is a game I made
        for me and my wife's families to compete in during the christmas
        holiday. I made a very rudimentary game for christmas 2019 that became a
        hit, so I wanted to make this battle of the clans into a christmas
        tradition.
      </p>
      <img src={imgAction} alt="" />
      <h2>Design Philosophy</h2>
      <p>
        I had two clear goals in mind when designing this game. Firstly I wanted
        the game to be accessible to everyone in the family. This meant that
        control schemes like moving with WASD, while also doing something with
        the right hand were out of the question. The game also needed to be
        intuitive and easily approachable. Secondly I wanted the game to be
        competetive. I wanted the players to be able to measure their success
        and compare it to others.
      </p>
      <p>
        Last years game set the standard for these philosophies by accident.
        Even though it was strikingly simple, it was a hit!
      </p>
      <video src={jolaspelet2019} controls></video>
      <h2>The Game</h2>
      <p>
        The game I ended up creating was a typing game. You play as santa claus
        who is riding in his sleigh, when suddenly rockets start flying towards
        you! Luckily you have your canon ready, and the rockets have a weak
        spot, a certain letter. Click the letter, shoot down the rocket, and
        repeat until... Well until your sleigh falls down.
      </p>
      <video src={jolaspeletVideo} controls></video>
      <p>
        Typing is something everyone in the family is familiar with, and also
        something that is useful to practice, so I thought it was the perfect
        fit for the input of the game.
      </p>
      <h2>High Score</h2>
      <div className="dirRow">
        <p>
          In 2019 the high score system was made up of rumors going around the
          block, and while that had it's own charm I wanted to go bigger in
          2020. I ended up creating a high score board that could be accessed in
          the game and at{" "}
          <a href="https://jolaspelet.no" target="_blank">
            jolaspelet.no
          </a>
          . This ended up working great, and checking the website for any new
          records became an exciting part of the holiday. It was also a great
          opportunity for me to try out web requests in Unity.
        </p>
        <img src={imgHighScore} alt="" />
      </div>

      <h2>The Verdict</h2>
      <p>
        The reception of the game was great! People really liked it and it
        ignited the competetive side of several of me and my wife's siblings. I
        plan to keep this tradition going, and I'm already brewing up ideas for
        2021!
      </p>
    </div>
  );
};

export default Jolaspelet;
