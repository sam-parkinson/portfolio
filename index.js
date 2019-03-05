function sectionClicked() {
  // check if the screen is a certain size
  $('.navbar li, h1').on('click', event => {
    const target = $(event.currentTarget).text().toLowerCase();
    if (target === 'sam parkinson') {
      showSection('.default');
    } else {
      showSection('.' + target);
    }
  })
  // check if the section name was clicked
  // call relevant function
}

function showSection(clicked) {
  $('.default, .portfolio, .about, .contact').addClass('hidden')
  $(clicked).removeClass('hidden');
}

function goToSection() {
  // go to clicked section
}

function screenExpand() {
  // the screen expands past x pixels
}

function screenContract() {
  // the screen shrinks 
}

function pageLoaded() {
  sectionClicked();
  screenExpand();
  screenContract();
}

$(pageLoaded);