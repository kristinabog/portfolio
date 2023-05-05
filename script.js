const slideButton = document.getElementById('about-me-btn');
const targetDiv = document.getElementById('about');

slideButton.addEventListener('click', () => {
  targetDiv.classList.add('slide-in');
});