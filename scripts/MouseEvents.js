let currentElem = null;
let navBar = document.body.classList

navBar.onmouseover = function(event) {
    console.log('я сработал')
    console.log(event.target)
    event.target.style.color = 'red'
};


navBar.onmouseout = function(event) {

};