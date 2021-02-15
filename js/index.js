// Your code goes here

document.querySelector('.nav').addEventListener('mouseover', underlineNav);

function underlineNav() {
    this.style.textDecoration = 'underline'
}