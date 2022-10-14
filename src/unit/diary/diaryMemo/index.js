import React, { useState, useEffect } from "react";

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  const onClickA = () => {
    setCount(count);
  };

  const onClickB = () => {
    setObj({ count: obj.count });
  };

  const CounterA = React.memo(({ count }) => {
    useEffect(() => {
      console.log(`CounterA update ${count}`);
    });
    return <div>{count}</div>;
  });

  // this result in shallow copy
  //   const CounterB = React.memo(({ obj }) => {
  //     useEffect(() => {
  //       console.log(`CounterB update ${obj.count}`);
  //     });
  //     return <div>{obj.count}</div>;
  //   });

  const CounterB = ({ obj }) => {
    useEffect(() => {
      console.log(`CounterB update ${obj.count}`);
    });
    return <div>{obj.count}</div>;
  };

  const areEqual = (prevProps, nextProps) => {
    if (prevProps.obj.count === nextProps.obj.count) {
      return true;
    }
    return false;
  };

  const MemoizedCounterB = React.memo(CounterB, areEqual);

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={onClickA}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={onClickB}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
