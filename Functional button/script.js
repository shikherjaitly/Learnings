const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
  // Generate a random color using RGB values
  const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  // Set the body background color to the generated random color
  document.body.style.backgroundColor = randomColor;
});
