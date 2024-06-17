"use client";

import Link from "next/link";

export default function Articels({ item }) {
  const { slug, thumbnail } = item.fields;
  // console.log("🚀 ~ Articels ~ slug:", slug);
  return (
    <div className="card card-body card-bordered w-96">
      <div>
        <img src={thumbnail?.fields.file.url} alt="Bally" className="h-52" />
      </div>
      <h1>{item.fields.title1}</h1>
      {/* <p>{item.fields.title}</p> */}
      <Link href={`/articels/${slug}`}>More</Link>
    </div>
  );
}
