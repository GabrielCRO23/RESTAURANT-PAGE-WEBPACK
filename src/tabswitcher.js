import { loadPage } from './page-load';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//const content = document.getElementById('content');
//removeAllChildNodes(content);


function tabber(buttonType) {
   
    
    removeAllChildNodes(content);
   //content.innerHTML = ""
   loadPage()
   
    let contentsContainer = document.createElement("div")
    let info = document.createElement("div")
    console.log('ayy')
    content.appendChild(contentsContainer)
    
    if (buttonType == 'home') {
        info.textContent = "Fine dininggnjg"
        contentsContainer.classList.add('contents')
        info.classList.add('home')
        contentsContainer.appendChild(info)
        content.appendChild(contentsContainer)
        
    } else if (buttonType == 'menu'){
        
        info.textContent = "Menu items"
        contentsContainer.classList.add('contents')
        info.classList.add('menu')
        contentsContainer.appendChild(info)
        content.appendChild(contentsContainer)
    } else if (buttonType == 'contact'){
        info.textContent = "Contact"
      contentsContainer.classList.add('contents')
        info.classList.add('contact')
        contentsContainer.appendChild(info)
        content.appendChild(contentsContainer)
    }
    
}


/*
function preventMultiple() {
    if (typeof contentsContainer === object) {
        console.log('ay')
    }
}
*/
/*
function menuTabber() {
    content.innerHTML = ""
    menuinfo.classList.remove('menu')
   loadPage(content)
    let contentsContainer = document.createElement("div")
    let menuinfo = document.createElement("div")
    menuinfo.textContent = "Menu items"
    contentsContainer.classList.add('contents')
    menuinfo.classList.add('menu')
    
    contentsContainer.appendChild(menuinfo)
    content.appendChild(contentsContainer)
    
}

function contactTabber() {
    
    content.innerHTML = ""
    loadPage(content)
   
    let contentsContainer = document.createElement("div")
    let contactinfo = document.createElement("div")
    contactinfo.textContent = "Contact items"
    contentsContainer.classList.add('contents')
    contactinfo.classList.add('contact')
    
    contentsContainer.appendChild(contactinfo)
    content.appendChild(contentsContainer)
    content.appendChild(contactinfo)
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
    export {  tabber };