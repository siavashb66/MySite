// Smooth Scroll | offset adjustment of link position
const LINKOFFSET = 120; // Offset for scrolling
// Jquery is a dependency Remember to include it  
$('body a.smooth-scroll').click(function(event) {
  const targetElement = $($(this).attr('href'));
  
  if(targetElement.length) {
    const targetPosition = targetElement[0].offsetTop - LINKOFFSET;
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update the URL without causing a page refresh
    history.pushState(null, null, $(this).attr('href'));
  } else {
    console.warn('Target element does not exist');
  }

  // Prevent the default action of the event
  event.preventDefault();
});
