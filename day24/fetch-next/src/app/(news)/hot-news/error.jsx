"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h1>Error Hot News</h1>
      <button onClick={reset}>try again</button>
    </>
  );
}
