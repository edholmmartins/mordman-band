// Server route: returns all image paths under /public/content/img
import fs from "fs";
import path from "path";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public/content/img");
  let files = [];
  try {
    files = fs
      .readdirSync(imagesDir, { withFileTypes: true })
      .filter((d) => d.isFile() && /\.(png|jpe?g|gif|webp|bmp|avif)$/i.test(d.name))
      .map((d) => `/content/img/${d.name}`);
  } catch (err) {
    console.error("Error reading images:", err);
  }

  return new Response(JSON.stringify({ files }), {
    headers: { "Content-Type": "application/json" },
  });
}