export default function Layout({ children, conversion, revenue, visitor }) {
  return (
    <>
      <h1>Layout</h1>
      {children}
      {conversion}
      {revenue}
      {visitor}
    </>
  );
}
