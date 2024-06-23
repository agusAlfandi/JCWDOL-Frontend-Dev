import { posts } from "@/data/data";

export async function GET() {
  return Response.json(posts);
}

// export async function POST(request) {}
