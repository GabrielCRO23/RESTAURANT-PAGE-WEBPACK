




function homeTabber() {
    
    let contentsContainer = document.createElement("div")
    let homeinfo = document.createElement("div")
    homeinfo.textContent = "Fine dining - the Korean way"
    contentsContainer.classList.add('contents')
    homeinfo.classList.add('home')
    contentsContainer.appendChild(homeinfo)
    content.appendChild(contentsContainer)
}

function menuTabber() {
    contentsContainer.remove()
    let contentsContainer = document.createElement("div")
    let menuinfo = document.createElement("div")
    menuinfo.textContent = "Menu items"
    contentsContainer.classList.add('contents')
    menuinfo.classList.add('menu')
    
    contentsContainer.appendChild(menuinfo)
    content.appendChild(contentsContainer)
}

function contactTabber() {
    let contentsContainer = document.createElement("div")
    let contactinfo = document.createElement("div")
    contactinfo.textContent = "Contact items"
    contentsContainer.classList.add('contents')
    contactinfo.classList.add('contact')
    
    contentsContainer.appendChild(contactinfo)
    content.appendChild(contentsContainer)
}

/*
    let homeinfo = document.createElement("div") --
    homeinfo.textContent = "Fine dining - the Korean way" --
    let menuinfo = document.createElement("div")
    menuinfo.textContent = "Menu items"
    let contactinfo = document.createElement("div")
    contactinfo.textContent = "Contact items"

    homeinfo.classList.add('home') --
    menuinfo.classList.add('menu')
    contactinfo.classList.add('contact')

    contentsContainer.appendChild(homeinfo)
    contentsContainer.appendChild(menuinfo)
    contentsContainer.appendChild(contactinfo)
*/
    export {  homeTabber, menuTabber, contactTabber };