import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useMyHook = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    incrementCount: () => setCount(count + 1)
  };
};

export const Count = () => {
  const navigate = useNavigate();
  const { count, incrementCount } = useMyHook();

  return (
    <>
      <h1>Component with Dynamic Count</h1>
      <p>The count is {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </>
  );
};
