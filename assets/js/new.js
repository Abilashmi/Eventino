function navigateToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
}
