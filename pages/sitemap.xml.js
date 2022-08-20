import fs from "fs";
import { getPosts } from "../lib/getPosts";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
	const baseUrl = {
		development: "http://localhost:3001",
		production: "https://blog.ahmetk.dev",
	}[process.env.NODE_ENV];

	const posts = await getPosts();

	const staticPages = fs
		.readdirSync(
			{
				development: "pages",
				production: "./",
			}[process.env.NODE_ENV]
		)
		.filter((staticPage) => {
			return !["_app.js", "_document.js", "_error.js", "sitemap.xml.js"].includes(staticPage);
		})
		.map((staticPagePath) => {
			return `${baseUrl}/${staticPagePath}`;
		});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
			.map((url) => {
				return `
      <url>
        <loc>${url.replace(".tsx", "")}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `;
			})
			.join("")}
			
		${posts
			.map(({ slug, publishedOn }) => {
				return `
              <url>
                <loc>${baseUrl}/posts/${slug}</loc>
                ${publishedOn ? `<lastmod>${new Date(publishedOn).toISOString()}</lastmod>` : ""}
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
			})
			.join("")}
    </urlset>
  `;

	console.log(staticPages);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;
