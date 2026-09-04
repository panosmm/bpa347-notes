export default {
  layout: "layout.njk",
  eleventyComputed: {
    // Title = the file's H1. No front matter in notes: the md stays clean for GitHub and for agents.
    title: (data) => (data.page.rawInput || "").match(/^#\s+(.+?)\s*$/m)?.[1] ?? data.page.fileSlug,
    week: (data) => data.page.filePathStem.split("/")[2],
    permalink: (data) => data.page.filePathStem.replace(/^\/(notes|drafts)\//, "/") + "/index.html",
  },
};
