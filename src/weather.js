const setBackground = (weatherType) => {
  const body = document.getElementById('body');
  body.style.background = `#000000 url(images/${weatherType}.jpg) no-repeat center center fixed`;
  body.style.backgroundSize = 'cover';
};

export default setBackground;
