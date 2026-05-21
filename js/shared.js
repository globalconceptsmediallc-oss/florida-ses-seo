document.addEventListener("DOMContentLoaded", () => {
  const basePath = "/florida-ses-seo";

  const header = `
    <header class="site-header">
      <div class="container">

        <div class="logo">
          <a href="${basePath}/">Florida SES SEO</a>
        </div>

        <nav class="main-nav">
          <ul>
            <li><a href="${basePath}/">Home</a></li>
            <li><a href="${basePath}/cities/">Cities</a></li>
            <li><a href="${basePath}/services/">Services</a></li>
            <li><a href="${basePath}/clusters/">Clusters</a></li>
            <li><a href="${basePath}/safe-dealers/">Safe Dealers</a></li>
          </ul>
        </nav>

      </div>
    </header>
  `;

  const footer = `
    <footer class="site-footer">
      <div class="container">
        <h3>Florida SES SEO Test Environment</h3>
        <p>
          Scalable SEO architecture for local safe dealer growth,
          service-area expansion, topical authority, and internal linking systems.
        </p>
      </div>
    </footer>
  `;

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) headerTarget.innerHTML = header;
  if (footerTarget) footerTarget.innerHTML = footer;
});
