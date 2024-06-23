"use client";

export default function GlobalError({ error, reset }) {
  return (
    <>
      <h1>Error Global</h1>
      <button onClick={reset}>try again</button>
    </>
  );
}
