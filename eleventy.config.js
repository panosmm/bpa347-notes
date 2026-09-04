import markdownIt from "markdown-it";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";
import AdmZip from "adm-zip";
import { mkdirSync, cpSync } from "node:fs";

// Staging: pages under drafts/ are built only when BUILD_DRAFTS is set (the local
// preview). Vercel builds without it, so a draft never reaches the live site.
const withDrafts = !!process.env.BUILD_DRAFTS;

export default function (eleventyConfig) {
  // html:false — raw HTML in notes is rendered as text, which is the point.
  const md = markdownIt({ html: false, linkify: true }).use(MarkdownItGitHubAlerts);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("notes/**/img/*");
  eleventyConfig.addPassthroughCopy("notes/**/*.md"); // raw markdown stays reachable at /notes/week-NN/*.md
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("NOTES-STYLE.md");
  eleventyConfig.ignores.add("kit/**"); // kit files are copied as-is below, never rendered as pages
  if (!withDrafts) eleventyConfig.ignores.add("drafts/**");

  const order = { mon: 0, thu: 1, homework: 2 };
  eleventyConfig.addCollection("weeks", (api) => {
    const byWeek = new Map();
    for (const p of api.getFilteredByGlob(["notes/week-*/*.md", "drafts/week-*/*.md"])) {
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

  // Does a page with this URL exist in this build? Used by the header nav so it never links to a 404.
  eleventyConfig.addFilter("hasPage", (all, url) => all.some((p) => p.url === url));

  // In the markdown, notes link to each other as plain files (homework.md) so the links also
  // work on GitHub and on disk. On the site, /week-NN/thu/ + homework.md must become ../homework/.
  eleventyConfig.addTransform("mdlinks", (content, outputPath) =>
    outputPath && outputPath.endsWith(".html")
      ? content.replace(/href="(mon|thu|homework)\.md"/g, 'href="../$1/"')
      : content,
  );

  const keep = (p) => !p.endsWith(".11tydata.js") && !p.endsWith(".DS_Store");

  // After every build:
  //  - zip notes/ into _site/notes.zip so the site can offer the folder for download;
  //  - zip kit/ into _site/kit.zip, files at the root of the archive, so "unpack it here"
  //    puts them straight into the student's working folder; also copy kit/ to _site/kit/
  //    so each file is readable in the browser.
  eleventyConfig.on("eleventy.after", ({ dir }) => {
    mkdirSync(dir.output, { recursive: true });

    const notes = new AdmZip();
    notes.addLocalFolder("notes", "notes", keep);
    notes.writeZip(`${dir.output}/notes.zip`);

    const kit = new AdmZip();
    kit.addLocalFolder("kit", "", keep);
    kit.writeZip(`${dir.output}/kit.zip`);
    cpSync("kit", `${dir.output}/kit`, { recursive: true, filter: (p) => keep(p) && !p.endsWith(".csv") }); // the data file ships in the zip only
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
