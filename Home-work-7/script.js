function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase();}
    
    document.querySelectorAll('.color-box').forEach(box => {
    const label = box.querySelector('.color-code');

    box.addEventListener('click', () => {
    const newColor = randomColor();

    box.style.background = newColor; 
    label.textContent = newColor;});});