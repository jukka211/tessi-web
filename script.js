const header = document.querySelector('.header');
const container = document.querySelector('.gallery-continer');
const headerHeight = header.offsetHeight;

function showHeader() {
  header.style.top = '0';
  container.style.top = headerHeight + 'px';
}

function hideHeader() {
  header.style.top = '-40px';
  container.style.top = '0';
}

document.addEventListener('mousemove', (e) => {
  const threshold = window.innerHeight * 0.1;
  if (e.clientY < threshold) {
    showHeader();
  } else {
    hideHeader();
  }
});

// Hide header when mouse leaves window or window loses focus
document.addEventListener('mouseleave', hideHeader);
window.addEventListener('blur', hideHeader);

window.addEventListener('resize', () => {
  if (header.style.top === '0px') {
    container.style.top = headerHeight + 'px';
  } else {
    container.style.top = '0';
  }
});



  // Only items are clickable; rows themselves do nothing
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation(); // keep clicks scoped to the item

      // Remove any active item across all rows
      document.querySelectorAll('.gallery-item.active')
        .forEach(el => el.classList.remove('active'));

      // Activate the clicked item
      item.classList.add('active');
    });
  });

  // Optional: click outside to clear active state
  document.addEventListener('click', (e) => {
    const clickedInsideGallery = e.target.closest('.gallery-continer');
    if (!clickedInsideGallery) {
      document.querySelectorAll('.gallery-item.active')
        .forEach(el => el.classList.remove('active'));
    }
  });

