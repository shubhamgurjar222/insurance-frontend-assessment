function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    menuContainer.classList.toggle('active');
    
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
    }
}

function closeMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    menuContainer.classList.remove('active');
    
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
    }
}


function toggleSection(sectionId) {
    const submenu = document.getElementById(sectionId);
    const icon = document.getElementById(sectionId + '-icon');
    const header = document.querySelector(`[onclick="toggleSection('${sectionId}')"]`);
    const title = header ? header.querySelector('.menu-section-title') : null;
    
    if (submenu) {
        submenu.classList.toggle('open');
    }
    
    if (icon) {
        icon.classList.toggle('expanded');
    }

    if (title) {
        title.classList.toggle('active');
        if (title.classList.contains('active')) {
            title.style.color = '#C93131';
            document.getElementById(sectionId + '-svg-path').style.stroke = '#C93131';
        } else {
            title.style.color = '#333';
            document.getElementById(sectionId + '-svg-path').style.stroke = '#222425';
        }
    }

    if (header) {
        header.classList.toggle('active');
    }
}


