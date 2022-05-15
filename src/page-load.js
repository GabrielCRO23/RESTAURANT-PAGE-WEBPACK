import { tabber } from './tabswitcher';

function loadPage() {
  
    content.innerHTML = ""

    let header = document.createElement("div")
    header.textContent = '한국 식당 by Gabriel'
    header.classList.add('header')

    let buttonContainer = document.createElement("div")
    let homeButton = document.createElement("button")
    homeButton.setAttribute("id", "homeButton")
    homeButton.textContent = "Home"
    let menuButton = document.createElement("button")
    menuButton.setAttribute("id", "menuButton")
    menuButton.textContent = "Menu"
    let contactButton = document.createElement("button")
    contactButton.setAttribute("id", "contactButton")
    contactButton.textContent = "Contact"

    buttonContainer.classList.add('button-container')
  
    buttonContainer.appendChild(homeButton)
    buttonContainer.appendChild(menuButton)
    buttonContainer.appendChild(contactButton)
  

    content.appendChild(header)
    content.appendChild(buttonContainer)
  
    homeButton.addEventListener("click", function(){
        tabber('home')  
    })
    
    
    
    menuButton.addEventListener("click", function(){
        tabber('menu')
    })
    
    contactButton.addEventListener("click", function(){  
        tabber('contact')
    }) 
}





export { loadPage };