const start = new Date()
document.addEventListener("DOMContentLoaded", ready)

function ready() {
    const end = new Date()
    let pageLoadTime = end - start
    console.log('Page load in: ' + pageLoadTime / 1000 + ' seconds')
}
