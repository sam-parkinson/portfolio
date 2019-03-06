function sectionClicked() {
  $('.navbar li, h1').on('click', event => {
    const target = $(event.currentTarget).text().toLowerCase();
    if (target === 'sam parkinson') {
      showSection('.default');
      goToSection('default');
    } else {
      showSection('.' + target);
      goToSection(target);
    }
  })
}

function showSection(clicked) {
  $('.default, .portfolio, .about, .contact').addClass('hidden')
  $(clicked).removeClass('hidden');
}

function goToSection(clicked) {
  const scrolled = document.getElementsByClassName(clicked)[0];
  if (clicked === 'contact') {
    scrolled.scrollIntoView(false);
  } else {
    scrolled.scrollIntoView(true);
    window.scrollBy(0, -64);
  }
}

$(sectionClicked);