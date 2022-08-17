/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkPrism from "remark-prism";

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
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};
