import { useEffect, useState } from "react";

export default function DiaryCycle() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onChangeCount = (event) => {
    setText(event.target.value);
  };

  // prettier-ignore
  useEffect(() => { // component 가 rendering 한번 될때 
    console.log("Mount!");
  }, []);

  // prettier-ignore
  useEffect(() => { // component 가 렌더링 되고 계속 업데이트 하고싶으면 방식
    console.log("update!");
  });

  // prettier-ignore
  useEffect(() => { // depency array 는 우리가 감지하고싶은것만 감지해서 그 값이 변할때만 수행
    console.log(`count is update: ${count}`)
    if (count > 5) {
        alert("카운트가 5를 넘었습니다. 따라서 1로 초기화합니다")
        setCount(1)
    }
  }, [count])

  // prettier-ignore
  useEffect(() => {
    console.log(`count is update: ${text}`)
  }, [text])

  const onToggle = () => {
    setIsVisible(!isVisible);
  };

  const UnMountTest = () => {
    useEffect(() => {
      console.log("Mount!");

      return () => {
        // Unmount 시점에 실행되게 됨
        console.log("UnMount!!!");
      };
    }, []);

    return <div>Unmount Testing Component</div>;
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <div>{count}</div>
        <button onClick={onClickCount}>+</button>
      </div>
      <div>
        <input value={text} onChange={onChangeCount} />
      </div>
      <button onClick={onToggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
}
