import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css": "static/css/bootstrap.min.css",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "static/js/bootstrap.bundle.min.js",
    "node_modules/bootstrap-icons/font/bootstrap-icons.min.css": "static/css/bootstrap-icons.min.css",
    "node_modules/bootstrap-icons/font/fonts/*": "static/css/fonts/",
  });
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.setQuietMode(false);

  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
    templateFormats: ["html", "njk", "md"],
  };
}