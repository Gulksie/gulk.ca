import { DateTime } from "luxon";
import markdownit from "markdown-it"

export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");

	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/css");

	eleventyConfig.addFilter("prettyDate", (dateObj) => {
    	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  	});

	//LaTeX integration taken largely from https://bkardell.com/blog/11tyMath.html
	const { katex } = await import("@mdit/plugin-katex");

	const mdLib = markdownit().use(katex, { output: "mathml" });
	eleventyConfig.setLibrary("md", mdLib);
};