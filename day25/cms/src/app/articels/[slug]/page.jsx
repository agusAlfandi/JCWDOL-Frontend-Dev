import { createClient } from "contentful";

async function getStaticPaths(slug) {
  try {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({
      content_type: "profileCompany",
      "fields.slug": slug,
    });
    return res.items;
    // console.log("🚀 ~ getRecipes ~ res:", res);" });
  } catch (error) {
    console.log(error.message);
  }
}
export default async function Page({ params }) {
  console.log("🚀 ~ Page ~ params:", params);
  const [profile] = await getStaticPaths(params.slug);
  const { title, thumbnail } = profile.fields;
  return (
    <div>
      <img src={thumbnail?.fields.file.url} alt="Bally" className="h-52" />
      <h1>{title}</h1>
    </div>
  );
}
