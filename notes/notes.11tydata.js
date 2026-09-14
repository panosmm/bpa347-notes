export default {
  layout: "layout.njk",
  eleventyComputed: {
    // Title = the file's H1. No front matter in notes: the md stays clean for GitHub and for agents.
    title: (data) => (data.page.rawInput || "").match(/^#\s+(.+?)\s*$/m)?.[1] ?? data.page.fileSlug,
    // week-NN pages get the week nav in the header; extra/ pages have no week.
    week: (data) => {
      const dir = data.page.filePathStem.split("/")[2];
      return dir?.startsWith("week-") ? dir : null;
    },
    permalink: (data) => data.page.filePathStem.replace(/^\/(notes|drafts)\//, "/") + "/index.html",
  },
};
