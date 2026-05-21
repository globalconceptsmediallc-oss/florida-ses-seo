document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HEADER
  ========================= */

  const header = `
    <header class="site-header">
      <div class="container">

        <div class="logo">
          <a href="/">Florida SES SEO</a>
        </div>

        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cities/">Cities</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/clusters/">Clusters</a></li>
            <li><a href="/safe-dealers/">Safe Dealers</a></li>
          </ul>
        </nav>

      </div>
    </header>
  `;

  /* =========================
     FOOTER
  ========================= */

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

  /* =========================
     INJECT
  ========================= */

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    headerTarget.innerHTML = header;
  }

  if (footerTarget) {
    footerTarget.innerHTML = footer;
  }

});
