export default async function () {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  return <div>Next.js</div>;
}
