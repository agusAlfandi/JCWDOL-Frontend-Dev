"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h1>Error app</h1>
      <button onClick={reset}>try again</button>
    </>
  );
}
