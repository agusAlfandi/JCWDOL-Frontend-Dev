import Articels from "@/components/Articels";
import { createClient } from "contentful";

async function getRecipes() {
  try {
    const client = createClient({
      space: "sf42d6317dpy",
      accessToken: "WUSY41AQEVYGVnKzOKg3XicR0AUGCfyFPQhh_K78y9E",
    });
    const res = await client.getEntries({ content_type: "profileCompany" });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const recipes = await getRecipes();
  console.log("🚀 ~ Home ~ recipes:", recipes);
  const data = recipes.filter(
    (item) => item.fields.thumbnail?.fields.file.url !== undefined,
  );

  return (
    <div className="grid grid-cols-3">
      {data.map((item, id) => {
        return <Articels key={id} item={item} />;
      })}
    </div>
  );
}
