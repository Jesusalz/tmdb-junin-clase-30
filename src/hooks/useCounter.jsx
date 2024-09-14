import { useState } from "react";

export function useCounter(initialState) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount((s) => s + 1);
  const decrement = () => setCount((s) => s - 1);
  const reset = () => setCount(initialState);

  return { count, increment, decrement, reset };
}
