import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log("🚀 ~ App ~ data:", data);
  // const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchtData() {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchtData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      // console.log("🚀 ~ handleDelete ~ res:", res);
      if (res.ok) {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.views}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Title</label>
        {/* <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(...title, content: e.target.value)} /> */}
        <label htmlFor="views">Views</label>
        <input type="number" placeholder="views" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
