let div = document.createElement('div')
let div2 = document.createElement('div2')
let delItems
let divItems
let div2Items

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


btn.onclick = function() {
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
}

save.onclick = function() {
    console.log('сохранить')
    for(let i = 1; i < table.childNodes.length; i+=3){
        localStorage.setItem(i.toString(), table.childNodes[i].innerHTML)
        localStorage.setItem((i+1).toString(), table.childNodes[i+1].innerHTML)
    }
    console.log(localStorage.getItem('1'))
    console.log(localStorage.getItem('2'))

}

deleteAll.onclick = function() {
    console.log('удалить все')
    while (table.firstChild) {
        table.removeChild(table.firstChild);
        localStorage.clear();
    }
}

load.onclick = function() {
    console.log('загрузить')
    console.log(localStorage.getItem('1'))
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


