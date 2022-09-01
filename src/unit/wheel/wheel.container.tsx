import * as S from "./wheel.styles";
import { useEffect, useMemo, useState } from "react";
import {
  faComputerMouse,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import _ from "lodash";

export default function Wheel() {
  //   const [isOnline, setIsOnline] = useState<boolean>(true);
  //   const [isOffline, setIsOffline] = useState<boolean>(false);

  const [isOnOff, setIsOnOff] = useState<boolean>(false);

  const onWheelEvent = _.debounce(() => {
    // setIsOnline((prev) => !prev);
    // setIsOffline((prev) => !prev);
    setIsOnOff((prev) => !prev);
    console.log("on wheel");
  }, 33);

  useEffect(() => {
    onWheelEvent();
  }, []);

  const onWheelTest = useMemo(
    () =>
      _.debounce(() => {
        // setIsOnline((prev) => !prev);
        // setIsOffline((prev) => !prev);
        setIsOnOff((prev) => !prev);
        console.log("on wheel");
      }, 32.5),
    []
  );

  useEffect(() => {
    onWheelTest();
  }, []);

  const WheelTest = _.debounce((event: any) => {
    console.log("event.wheelDelta:", event.deltaY);
    if (event.deltaY > 0) {
      setIsOnOff((prev) => !prev);
    } else if (event.deltaY < 0) {
      setIsOnOff((prev) => !prev);
    }
  }, 32.5);

  useEffect(() => {
    WheelTest(isOnOff);
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          src="https://kit.fontawesome.com/16df0a1568.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <S.LogoImg src="logo.png" />
      <S.Wrapper onWheel={WheelTest}>
        <S.MainWrapper>
          <S.LeftWrapper>
            <S.OnLabel>Offline</S.OnLabel>
            <S.OffLabel>Online</S.OffLabel>
            <S.Title>Sturting</S.Title>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Intro>같이 공부를 시작해봐요!</S.Intro>
            {/* {isOnline && (
              <>
                <S.Online>스터팅 온라인</S.Online>
                <S.BulletListWrapper>
                  <li>Offline curriculum and memtoring system</li>
                  <li>No limits on time and space</li>
                  <li>Consistent update in contents</li>
                  <li>Instant feedbacks</li>
                </S.BulletListWrapper>
              </>
            )}
            {isOffline && (
              <>
                <S.Offline>스터팅 오프라인</S.Offline>
                <S.BulletListWrapper>
                  <li>Learning most updated stacks</li>
                  <li>5 hours of memtoring system</li>
                  <li>Feedbacks from your collegues</li>
                  <li>Only concentrate on coding</li>
                </S.BulletListWrapper>
              </>
            )} */}
            {isOnOff ? (
              <>
                <S.Online>스터팅 온라인</S.Online>
                <S.BulletListWrapper>
                  <li>Offline curriculum and memtoring system</li>
                  <li>No limits on time and space</li>
                  <li>Consistent update in contents</li>
                  <li>Instant feedbacks</li>
                </S.BulletListWrapper>
              </>
            ) : (
              <>
                <S.Offline>스터팅 오프라인</S.Offline>
                <S.BulletListWrapper>
                  <li>Learning most updated stacks</li>
                  <li>5 hours of memtoring system</li>
                  <li>Feedbacks from your collegues</li>
                  <li>Only concentrate on coding</li>
                </S.BulletListWrapper>
              </>
            )}
            <S.EnterWrapper>
              <S.EnterInnerWrapper>
                <S.Enter>ENTER</S.Enter>
              </S.EnterInnerWrapper>
            </S.EnterWrapper>
          </S.RightWrapper>
        </S.MainWrapper>
        <S.ScrollWrapper onClick={onWheelTest}>
          <S.MouseIcon icon={faComputerMouse} />
          <S.ArrowIcon icon={faAnglesDown} />
          <S.Scroll>Scroll</S.Scroll>
        </S.ScrollWrapper>
      </S.Wrapper>
    </>
  );
}
