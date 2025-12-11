export const enhanceSEO = (blogJson) => {
  // simple placeholder — can add keyword insertion or meta tweaks
  // parse JSON if it's string
  let blog = typeof blogJson === "string" ? JSON.parse(blogJson) : blogJson;
  blog.meta += " | Optimized for search engines";
  return blog;
};
