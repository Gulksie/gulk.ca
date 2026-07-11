import { DateTime } from "luxon";
import markdownit from "markdown-it"

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
};

export const config = {
	markdownTemplateEngine: "njk",
};