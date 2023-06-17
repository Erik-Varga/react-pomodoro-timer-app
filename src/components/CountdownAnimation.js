import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({key, timer, animate, children}) => {
  const {stopTimer} = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        '#c7c438', 0.33,
        '#c7c438', 0.33,
        '#c7c438', 0.33,
      ]}
      strokeWidth={12}
      size={220}
      trailColor="#151932"
      // trailColor="yellow"
      onComplete={ () => {
        stopTimer()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
};

export default CountdownAnimation
