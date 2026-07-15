import { DateTime } from "luxon";
import markdownit from "markdown-it";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import htmlmin from "html-minifier-terser";

export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");

	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");

	//LaTeX integration taken largely from https://bkardell.com/blog/11tyMath.html
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	const { katex } = await import("@mdit/plugin-katex");

	const mdLib = markdownit(options).use(katex, { output: "mathml" });
	eleventyConfig.setLibrary("md", mdLib);

	// add atom feed bc why not
	// https://www.11ty.dev/docs/plugins/rss/
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Kayla's blog thing",
			subtitle: "Kayla's various thoughts",
			base: "https://gulk.ca/",
			author: {
				name: "Kayla Gulka",
				email: "kayla@gulka.ca", // Optional
			}
		}
	});

	// minify html
	// https://www.11ty.dev/docs/transforms/#minify-html-output
	eleventyConfig.addTransform("htmlmin", function (content) {
		// String conversion to handle `permalink: false`
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});
};

export const config = {
	markdownTemplateEngine: "njk",
};