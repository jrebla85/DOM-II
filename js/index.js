// Your code goes here
document.querySelector('h1.logo-heading').addEventListener('mouseover', changeH1)

document.querySelector('h1.logo-heading').addEventListener('mouseleave', revertH1)

function changeH1() {
    this.textContent = 'Among Us!'
    this.style.color = 'white'
    this.style.backgroundColor = 'black'
}

function revertH1(){
    this.textContent = 'Fun Bus'
    this.style.color = 'black'
    this.style.backgroundColor = 'white'
}

document.querySelector('.nav').addEventListener('mouseover', underlineNav);

document.querySelector('.nav').addEventListener('mouseleave', removeUnderline);

function underlineNav() {
    this.style.textDecoration = 'underline';
};

function removeUnderline() {
    this.style.textDecoration = 'none';
};

