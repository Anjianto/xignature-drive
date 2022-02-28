module.exports = {
  // Run ESLint on changes to JavaScript/Vue files
  "**/*.(js|vue)": (filenames) => `npm run lint . ${filenames.join(" ")}`,
};
