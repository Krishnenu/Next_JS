"use client";

import { useState, useEffect, JSX } from "react";
export default function ProgressBar() {
  const [barList, setBarList] = useState<JSX.Element[]>([]);
  const onClickHandler = () => {
    setBarList((prevBarList) => [
      ...prevBarList,
      <ProgressStatus key={Math.random()} />,
    ]);
  };

  return (
    <div>
      <div className="flex flex-col items-center text-xl font-bold">
        <button onClick={onClickHandler}>Add</button>
      </div>
      <div>
        {barList.map((list) => (
          <div key={Math.random()} style={{ marginBottom: "10px" }}>
            <ul key={Math.random()}>{list}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressStatus() {
  const [barPercentage, setBarPercentage] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      setBarPercentage((prev) => prev + 1);
    }, 20);
    if (barPercentage === 100) {
      clearTimeout(time);
    }
  }, [barPercentage]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "10px",
          backgroundColor: "grey",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            width: `${barPercentage}vw`,
            height: "10px",
            backgroundColor: "green",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </>
  );
}
