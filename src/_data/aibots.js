// stolen
// https://github.com/nyancrimew/maia.crimew.gay/blob/main/src/_data/aibots.js

export default async function () {
    let response = await fetch("https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.txt");
    return response.text();
}