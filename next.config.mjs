/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkPrism from "remark-prism";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`;

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
];

export default {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: "@mdx-js/loader",
					options: {
						providerImportSource: "@mdx-js/react",
						remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkPrism],
					},
				},
			],
		});

		return config;
	},
	images: {
		domains: ["unsplash.com"],
	},
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: securityHeaders,
			},
		];
	},
};
