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

function appendLinkElement(rel, type, sizes, href, color) {
  const linkElement = document.createElement('link');
  
  if (rel) linkElement.rel = rel;
  if (type) linkElement.type = type;
  if (sizes) linkElement.sizes = sizes;
  if (href) linkElement.href = href;
  if (color) linkElement.setAttribute('color', color);

  document.head.appendChild(linkElement);
}

// Usage
document.addEventListener('DOMContentLoaded', function() {
  appendLinkElement('apple-touch-icon', null, '180x180', '/apple-touch-icon.png', null);
  appendLinkElement('icon', 'image/png', '32x32', '/favicon-32x32.png', null);
  appendLinkElement('icon', 'image/png', '16x16', '/favicon-16x16.png', null);
  appendLinkElement('manifest', null, null, '/site.webmanifest', null);
  appendLinkElement('mask-icon', null, null, '/safari-pinned-tab.svg', '#5bbad5');
  appendLinkElement('icon', "image/x-icon", null, '/favicon.ico', null);
  appendLinkElement('icon', "image/png", '512x512', '/android-chrome-512x512.png', null);
  appendLinkElement('icon', "image/png", '192x192', '/android-chrome-192x192.png', null);
});
