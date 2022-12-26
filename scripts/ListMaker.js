let div = document.createElement('div')
let div2 = document.createElement('div2')
let delItems
let divItems
let div2Items


toastr.options = {
    "newestOnTop": false,
    "positionClass": "toast-bottom-full-width",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
  }


let del = document.createElement('input')
del.type = 'button'
del.className = 'del'
del.value = 'Удалить'

const btn = document.querySelector('input.btn')
const save = document.querySelector('input.save')
const deleteAll = document.querySelector('input.deleteAll')
const load = document.querySelector('input.load')

const name = document.querySelector('input.name')
const count = document.querySelector('input.count')
let table = document.querySelector('article.table')

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

btn.onclick = function() {
    if (isNumber(name.value[0])) {
        toastr.error("Element key is cant be number", "Key is invalid")
        return
    }
    div.innerHTML = name.value
    div.className = 'div'
    div2.innerHTML = count.value
    div2.className = 'div2'

    table.appendChild(div)
    table.appendChild(div2)
    table.appendChild(del)
    console.log(table)
    console.log(table.childNodes)

    div = document.createElement('div')
    div2 = document.createElement('div2')
    del = document.createElement('input')
    del.type = 'button'
    del.className = 'del'
    del.value = 'Удалить'

    delItems = document.getElementsByClassName("del")
    divItems = document.getElementsByClassName("div")
    div2Items = document.getElementsByClassName("div2")

    for (let i = 0; i < delItems.length; i++){
        delItems[i].onclick = function() {
            toastr.warning("Element deleted")
            let children = table.childNodes
            console.log(children)
            if(i === 0){
                table.removeChild(children[i + 1])
                table.removeChild(children[i + 1])
                table.removeChild(children[i + 1])
                console.log('ку')
            }else{
                table.removeChild(children[(i * 3) + 1])
                table.removeChild(children[(i * 3) + 1])
                table.removeChild(children[(i * 3) + 1])
            }

            delItems = document.getElementsByClassName("del")
            divItems = document.getElementsByClassName("div")
            div2Items = document.getElementsByClassName("div2")

            console.log(table)
            console.log(children)
            console.log(i)
        }
    }
    
    toastr.success("Element added")
}

save.onclick = function() {
    toastr.success("Elements saved")
    for(let i = 1; i < table.childNodes.length; i+=3){
        localStorage.setItem(i.toString(), table.childNodes[i].innerHTML)
        localStorage.setItem((i+1).toString(), table.childNodes[i+1].innerHTML)
    }
    console.log(localStorage.getItem('1'))
    console.log(localStorage.getItem('2'))

}

deleteAll.onclick = function() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
        localStorage.clear();
    } 
    toastr.warning("LocalStorage is clean")
}

load.onclick = function() {
    toastr.warning("LocalStorage is loaded")
    for(let i = 1; i < localStorage.length; i+=3){

        div = document.createElement('div')
        div2 = document.createElement('div2')
        del = document.createElement('input')
        del.type = 'button'
        del.className = 'del'
        del.value = 'Удалить'

        div.innerHTML = localStorage.getItem(i.toString())
        div.className = 'div'
        div2.innerHTML = localStorage.getItem((i+1).toString())
        div2.className = 'div2'

        table.appendChild(div)
        table.appendChild(div2)
        table.appendChild(del)

        delItems = document.getElementsByClassName("del")
        divItems = document.getElementsByClassName("div")
        div2Items = document.getElementsByClassName("div2")
    }
}


