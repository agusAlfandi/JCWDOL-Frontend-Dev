import Link from "next/link";

export default function HotNewsPage() {
  //   const indexError = Math.round(Math.random());
  //   console.log("🚀 ~ indexError:", indexError);

  //   if (indexError === 0) {
  //     throw new Error("AI Error");
  //   }
  return (
    <>
      <h1>Hot News</h1>
      <div>
        <Link href="/hot-news/1">
          <h1>Hot 1</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda
          laborum quisquam quae esse sed beatae totam omnis animi! Qui quo
          consectetur maxime facere recusandae ullam sed soluta adipisci minus.
        </p>
      </div>
      <div>
        <Link href="/hot-news/2">
          <h1>Hot 2</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda
          laborum quisquam quae esse sed beatae totam omnis animi! Qui quo
          consectetur maxime facere recusandae ullam sed soluta adipisci minus.
        </p>
      </div>
    </>
  );
}
