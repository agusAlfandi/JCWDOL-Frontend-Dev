"use client";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handeSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <form onSubmit={handeSubmit}>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <button>Add</button>
    </form>
  );
}
