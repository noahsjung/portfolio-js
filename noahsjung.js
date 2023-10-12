const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.notion-text, .notion-image, .notion-heading, .notion-list-item, .notion-collection-card, .notion-video, notion-collection, .notion-collection__header-wrapper, .notion-callout, .notion-toggle');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        window.location.href = event.target.href;
        window.location.reload(true);
        event.preventDefault();
    }
});
