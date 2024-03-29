
window.addEventListener('resize', calculateNavbarHeight);

function calculateNavbarHeight() {
    const fixedNav = document.querySelector('.fixed-nav');
    const followerNav = document.querySelector('.fixed-nav.follower');

    if (fixedNav) {
        const fixedNavHeight = fixedNav.offsetHeight; // Get actual height

        // Store the height in a root variable for access by follower nav
        document.documentElement.style.setProperty('--old-nav-height', `${fixedNavHeight}px`);
    }
}
calculateNavbarHeight(); // Call initially