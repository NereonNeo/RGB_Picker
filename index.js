//! DOM ELEMENTS
let red = document.querySelector('#red'),
  green = document.querySelector('#green'),
  blue = document.querySelector('#blue'),
  topLabel = document.querySelector('.top-label');
button = document.querySelector('button');
hex = document.querySelector('.hex');
copy_button = document.querySelector('button');

// ! CHANGE TO RGB
const changeRGB = (color) => (topLabel.textContent = color);
generateRGBString = () => `rgb(${red.value}, ${green.value}, ${blue.value})`;
slideEventHandler = () => {
  rgb = generateRGBString();
  document.body.style.backgroundColor = rgb;
  topLabel.style.color = rgb;
  changeRGB(rgb);
  button.style.backgroundColor = rgb;
};
document.body.addEventListener('input', slideEventHandler);

//! COPY ONCLICK BUTTON
copy_button.addEventListener('click', function () {
  let temp = document.createElement('INPUT');
  temp.value = topLabel.textContent;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  temp.remove();
  alert('Text Copied!');
});

// ! CHANGE TO HEX BUT NOT FINISHED
hex.onclick = () => {
  const changeHex = (color) => (topLabel.textContent = color);
  generateHextring = () =>
    `#
     ${red.value.toString(16)}
     ${green.value.toString(16)} 
     ${blue.value.toString(16)}
     `;
  changeHex(generateHextring());
};
