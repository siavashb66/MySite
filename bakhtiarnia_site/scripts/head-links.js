// Function to inject a link tag into the head
function injectLinkTag(href, rel, type = "", color = "", sizes = "") {
  const linkTag = document.createElement("link");
  linkTag.href = href;
  linkTag.rel = rel;
  if (type) {
    linkTag.type = type;
  }
  if (color) {
    linkTag.setAttribute("color", color);  // Set the color attribute
  }
  if (sizes) {
    linkTag.setAttribute("sizes", sizes);  // Set the sizes attribute
  }
  document.head.appendChild(linkTag);
}

// Inject all the favicon and related link tags
injectLinkTag("/assets/favicons/apple-touch-icon-60x60.png", "apple-touch-icon", "", "", "60x60");
injectLinkTag("/assets/favicons/apple-touch-icon-76x76.png", "apple-touch-icon", "", "", "76x76");
injectLinkTag("/assets/favicons/apple-touch-icon-120x120.png", "apple-touch-icon", "", "", "120x120");
injectLinkTag("/assets/favicons/apple-touch-icon-152x152.png", "apple-touch-icon", "", "", "152x152");
injectLinkTag("/assets/favicons/apple-touch-icon-180x180.png", "apple-touch-icon", "", "", "180x180");
injectLinkTag("/assets/favicons/favicon-32x32.png", "icon", "image/png", "", "32x32");
injectLinkTag("/assets/favicons/favicon-16x16.png", "icon", "image/png", "", "16x16");
injectLinkTag("/assets/favicons/site.webmanifest", "manifest");
injectLinkTag("/assets/favicons/safari-pinned-tab.svg", "mask-icon", "image/svg+xml", "#5bbad5");
injectLinkTag("/favicon.ico", "shortcut icon");
injectLinkTag("", "msapplication-TileColor", "", "#da532c");
injectLinkTag("/assets/favicons/browserconfig.xml", "msapplication-config");
injectLinkTag("", "theme-color", "", "#ffffff");
