import { useRef, useState } from "react";

export const Timer = () => {
  const INITIAL_TIME = 180; //* 카운트 다운 시간만 받으면 가능
  const [time, setTime] = useState(INITIAL_TIME);
  const startTime = useRef(performance.now());

  let rAF: number;

  const startTimer = () => {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - startTime.current) / 1000; // 밀리초를 초로 변환합니다.

    if (elapsedTime >= 1) {
      startTime.current = currentTime;
      setTime((prevTime) => Math.max(prevTime - elapsedTime, 0));
    }

    if (time > 0) {
      rAF = requestAnimationFrame(startTimer);
    } else {
      cancelAnimationFrame(rAF);
    }
  };

  requestAnimationFrame(startTimer);

  return (
    <>
      {Math.floor(time / 60)} : {Math.round(time % 60)}
    </>
  );
};

export default Timer;
