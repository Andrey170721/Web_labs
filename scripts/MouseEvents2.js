let navbarItems = document.getElementsByClassName("navBar")

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].onmouseover = (e) => {

            e.target.style.color = "#FF3028"
        }
        navbarItems[i].onmouseout = (e) => {

            e.target.style.color = ""
        }
    }
})

if (document.location.pathname === '/web_labs/html/MainPage.html'){
    navbarItems[0].style.textDecoration='overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/Catalog.html'){
    navbarItems[1].style.textDecoration='overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/FeedBack.html') {
    navbarItems[2].style.textDecoration = 'overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/About.html') {
    navbarItems[3].style.textDecoration = 'overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/Basket.html') {
    navbarItems[4].style.textDecoration = 'overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/FAQ.html') {
    navbarItems[5].style.textDecoration = 'overline #FF3028'
} else if(document.location.pathname === '/web_labs/html/Profile.html') {
    navbarItems[6].style.textDecoration = 'overline #FF3028'
}
console.log(document.location)
