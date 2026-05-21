(function () {
  const productionDomain = "https://www.floridasesseo.com";

  let path = window.location.pathname;

  // Normalize homepage
  if (path === "/index.html") {
    path = "/";
  }

  // Strip .html from canonical path
  path = path.replace(/\.html$/, "");

  // Remove trailing slash except homepage
  if (path.length > 1) {
    path = path.replace(/\/$/, "");
  }

  const canonicalUrl = productionDomain + path;

  let canonical = document.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", canonicalUrl);
})();
