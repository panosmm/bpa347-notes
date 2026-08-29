import markdownIt from "markdown-it";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";

export default function (eleventyConfig) {
  // html:false — raw HTML in notes is rendered as text, which is the point.
  const md = markdownIt({ html: false, linkify: true }).use(MarkdownItGitHubAlerts);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("notes/**/img/*");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("NOTES-STYLE.md");

  const order = { mon: 0, thu: 1, homework: 2 };
  eleventyConfig.addCollection("weeks", (api) => {
    const byWeek = new Map();
    for (const p of api.getFilteredByGlob("notes/week-*/*.md")) {
      const w = p.data.week;
      if (!byWeek.has(w)) byWeek.set(w, []);
      byWeek.get(w).push(p);
    }
    return [...byWeek.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([week, pages]) => ({
        week,
        pages: pages.sort((a, b) => (order[a.fileSlug] ?? 9) - (order[b.fileSlug] ?? 9)),
      }));
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
