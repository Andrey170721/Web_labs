document.addEventListener("DOMContentLoaded", function () {
    loadAllRockets()
            .then(res => renderList(dataCombiner(res)))
            .catch(showErrInfo)
            .finally(hideLoader)


});


function hideLoader() {
    var loader = document.getElementById("loading")
    loader.className += "loaded"
}


function loadAllRockets() {
    return new Promise((resolve, reject) => {
        var p = Math.floor(Math.random() * 10)
        fetch(`https://api.spacexdata.com/v3/history?limit=5&offset=${p}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                resolve(response.json())
            })
            .catch(err => reject(err))
    })
}



function dataCombiner(data) {
    return data.map(d => {
        return {
            id: d.id,
            name: d.title,
            details: d.details,
            event_date_utc: d.event_date_utc
        }
    })
}


function renderList(json) {
    json.forEach(e => {
        renderRocket(e)
    });
}

function renderRocket(r) {
    var list = document.getElementById("rocket-list")
    list.appendChild(htmlToElement(`\
    <li class="rocket">
      <h3 class="rocket-name">${r.name}</h3>
      <p class="rocket-coast">${r.details}</p>
      <p class="rocket-coast">Запуск ${r.event_date_utc}</p>
      
    </li>`
    ))
}

function showErrInfo(err) {
    var list = document.getElementById("rocket-list")
    console.log(err);
    list.appendChild(htmlToElement(`\
    <h1>${err} | Что-то пошло не так</h1>`
    ))
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}