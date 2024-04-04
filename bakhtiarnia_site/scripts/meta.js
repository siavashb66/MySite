function appendMetaTag(name, content) {
    const headElement = document.head;
    const metaElement = document.createElement('meta');
    metaElement.name = name;
    metaElement.content = content;
    headElement.appendChild(metaElement);
  }
  
  // Usage
  document.addEventListener('DOMContentLoaded', (event) => {
    appendMetaTag('description', 'Siavash Bakhtiarnia, Ph.D. - Nanomaterials Engineering. Explore my journey in nanotechnology, from a Master\'s degree at Sharif University to groundbreaking research in visible-light-driven photocatalysis at Tehran University. Specializing in thin-film photocatalysts, particularly Bismuth Vanadate (BiVO4) deposition using physical vapor deposition. Passionate about leveraging nanomaterials and solar energy for sustainable water treatment solutions.');
    appendMetaTag('author', 'Siavash Bakhtiarnia');
    appendMetaTag('keywords', 'nanotechnology, photocatalysis, material science, solar energy, sustainable technologies, Python programming, adventure, creative writing');
    appendMetaTag('robots', 'index, follow');
  });
  