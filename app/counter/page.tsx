"use client";

import { useState } from "react";

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Initial count fetched from the server: {initialCount}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Clicks: {count}
      </button>
    </div>
  );
}

// Fetch the initial count on the server
// export async function getServerSideProps() {
//   // Simulate fetching a value from a database or API
//   const initialCount = 0;

//   return {
//     props: {
//       initialCount,
//     },
//   };
// }
