// Your code goes here
const img = document.querySelector('.intro img');
img.addEventListener('dblclick', function () {
    img.style.hieght = '300px';
    img.style.width = '200px';
});

const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function () {
    footer.style.backgroundColor = 'orange';
});

const navBar = document.querySelector('.nav');
navBar.addEventListener('mousemove', function () {
    navBar.style.flexDirection = 'row-reverse';
});

const content = document.querySelector('.content-section');
content.addEventListener('mouseenter', function () {
    content.style.flexDirection = 'column-reverse';
});

const intro = document.querySelector('body');
intro.addEventListener('keyup', function () {
    intro.style.backgroundColor = 'Limegreen';
});





const imgContent = document.querySelector('.img-content');
imgContent.addEventListener('wheel', function () {
    imgContent.style.transform = "scale(1.5)";
});


const button = document.querySelectorAll(".btn");
button.forEach(function(element){
    element.onclick = function(event){
        alert('LOL YOU THOUGHT.')
        
    }
});

const paragraph = document.querySelectorAll("p");
paragraph.forEach(function(element){
    element.oncopy = function(event){
        alert('YEAH OK JUST STEAL MY CONTENT')
    }
});

const highlight2 = document.querySelector('.content-destination');
highlight2.addEventListener('mouseover', function () {
        highlight2.style.backgroundColor = 'lightgreen';
});

const h2 = document.querySelector('h2');

window.addEventListener('scroll', function(event){
    h2.style.color = 'blue';
});































