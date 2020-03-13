import React, {useState} from 'react';

// image
import logo from './assets/images/logo.svg';

// styling
import './assets/scss/App.scss';

import LeftSideWeight from "./components/left-side-weight/LeftSideWeight";
import RightSideWeight from "./components/right-side-weight/RightSideWeight";

function App() {
  const [leftSideWeight, setLefSideWeight] = useState(0);
  const [rightSideWeight, setRightSideWeight] = useState(Math.round(2 + Math.random() * (10 - 2)));
  const [equalWeight, setEqualWeight] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  // balance the tooter bar
  let balanceWeight = leftSideWeight !== 0 ? 18 - (rightSideWeight - leftSideWeight) : 0;

  return (
    <div className="App">
      <header className="App-header">
        Teeter Totter using <img src={logo} className="App-logo" alt="logo"  />

        {/* Play and Pause control */}
        <div
          className="play-pause-btn"
          onClick={()=> setIsPlay(!isPlay)}
        >
          {
            !equalWeight &&
              isPlay ?
                <i className="far fa-pause-circle"></i>
                :
                <i className="fas fa-play-circle"></i>
          }
        </div>
      </header>

      <LeftSideWeight
        isPlay={isPlay}
        rightSideWeight={rightSideWeight}
        setLefSideWeight={setLefSideWeight}
        setEqualWeight={setEqualWeight}
      />

      <RightSideWeight
        rightSideWeight={rightSideWeight}
      />

      <div className="teeter-base">
        <div
          className="teeter-bar"
          style={
            equalWeight ? {'transform': 'rotate(-18deg)'}
              : leftSideWeight === rightSideWeight ?
                {'transform': `rotate(0deg)`}
                : leftSideWeight !== 0 ?
                  {'transform': `rotate(${18 - balanceWeight }deg)`}
                  : {}
          }
        >
        </div>
        <div className="triangle-up"></div>
      </div>

      {equalWeight &&
        <h1>Game Over</h1>
      }
    </div>
  );
}

export default App;
