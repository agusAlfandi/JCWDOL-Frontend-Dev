export default async function Page() {
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  const response = await fetch("http://localhost:3000/lates-news/api");
  const data = await response.json();
  console.log("🚀 ~ Page ~ data:", data[0]);

  return (
    <>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}
