//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, homeScore] = useState(0);
  const [away, awayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Giants</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Eagles</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => homeScore(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeScore(home + 3)}>Home Field Goal</button>
          <button className="resetButton" onClick={() => homeScore(0)}>Reset Home</button>
        </div>
        <div className="awayButtons">  
          <button className="awayButtons__touchdown" onClick={() => awayScore(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => awayScore(away + 3)}>Away Field Goal</button>
          <button className="resetButton" onClick={() => awayScore(0)}>Reset Away</button>
        </div>
      </section>
    </div>
  );
}

export default App;
