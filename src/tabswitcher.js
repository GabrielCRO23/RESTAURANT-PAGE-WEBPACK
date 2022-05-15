
import { loadPage } from './page-load';


function tabber(buttonType) {

   loadPage()
   
    let contentsContainer = document.createElement("div")
    let info = document.createElement("div")
    console.log('ayy')
    content.appendChild(contentsContainer)
    
    if (buttonType == 'home') {
        info.textContent = "Fine dining - the Korean Way"
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

    export {  tabber };