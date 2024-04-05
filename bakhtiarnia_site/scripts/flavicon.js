function appendMetaTag(name, content) {
  const headElement = document.head;
  const metaElement = document.createElement('meta');
  metaElement.name = name;
  metaElement.content = content;
  headElement.appendChild(metaElement);
}

// Usage for meta tags
document.addEventListener('DOMContentLoaded', (event) => {
  appendMetaTag('msapplication-TileColor', '#dc6946');
  appendMetaTag('theme-color', '#ffffff');
});

function appendLinkElement(rel, sizes, type, href) {
  var linkElement = document.createElement('link');
  
  if (rel) linkElement.rel = rel;
  if (sizes) linkElement.sizes = sizes;
  if (type) linkElement.type = type;
  if (href) linkElement.href = href;

  document.head.appendChild(linkElement);
}

// Usage for link elements
document.addEventListener('DOMContentLoaded', function() {
  appendLinkElement('apple-touch-icon', '180x180', 'image/png', '/apple-touch-icon.png');
  appendLinkElement('icon', '32x32', 'image/png', '/favicon-32x32.png');
  appendLinkElement('icon', '16x16', 'image/png', '/favicon-16x16.png');
  appendLinkElement('manifest', null, null, '/site.webmanifest');
  appendLinkElement('mask-icon', null, null, '/safari-pinned-tab.svg');
  appendLinkElement('icon', null, 'image/x-icon', '/favicon.ico');
  appendLinkElement('icon', '512x512', 'image/png', '/android-chrome-512x512.png');
  appendLinkElement('icon', '192x192', 'image/png', '/android-chrome-192x192.png');
});
