import React, { useContext, useEffect } from "react";
import { RxLapTimer } from "react-icons/rx";
import Button from "./components/Button";

import SetPomodoro from "./components/SetPomodoro";
import CountdownAnimation from "./components/CountdownAnimation";
import { SettingsContext } from "./context/SettingsContext";
import Footer from './components/Footer'

const App = () => {
  const {
    pomodoro,
    executing,
    startAnimation,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    settingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimation, updateExecute]);

  return (
    <div>
      <div className="container">
        <h1 className="display-2">
          Pomodoro Timer <RxLapTimer />
        </h1>
        <small>Be productive the right way.</small>
        <hr></hr>
        {pomodoro !== 0 ? (
          <>
            <ul className="labels">
              <li>
                <Button
                  title="Work"
                  activeClass={executing.active === "work" && "active-label"}
                  _callback={() => setCurrentTimer("work")}
                />
              </li>

              <li>
                <Button
                  title="Short Break"
                  activeClass={executing.active === "short" && "active-label"}
                  _callback={() => setCurrentTimer("short")}
                />
              </li>

              <li>
                <Button
                  title="Long Break"
                  activeClass={executing.active === "long" && "active-label"}
                  _callback={() => setCurrentTimer("long")}
                />
              </li>
            </ul>
            <Button title="Settings" _callback={settingsBtn} />
            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimation}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Button
                title="Start"
                className={!startAnimation && "active"}
                _callback={startTimer}
              />
              <Button
                title="Pause"
                className={startAnimation && "active"}
                _callback={pauseTimer}
              />
            </div>
          </>
        ) : (
          <SetPomodoro />
        )}
      <Footer />
      </div>
    </div>
  );
};

export default App;
