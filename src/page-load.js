

function loadPage(content) {
    let header = document.createElement("div")
    header.textContent = '한국 식당'
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
/* 
    let contentsContainer = document.createElement("div")
  
    let homeinfo = document.createElement("div")
    homeinfo.textContent = "Fine dining - the Korean way"
    let menuinfo = document.createElement("div")
    menuinfo.textContent = "Menu items"
    let contactinfo = document.createElement("div")
    contactinfo.textContent = "Contact items"
*/
    buttonContainer.classList.add('button-container')
   /*
    contentsContainer.classList.add('contents')
   
    homeinfo.classList.add('home')
    menuinfo.classList.add('menu')
    contactinfo.classList.add('contact')
    */
    buttonContainer.appendChild(homeButton)
    buttonContainer.appendChild(menuButton)
    buttonContainer.appendChild(contactButton)
    /*
    contentsContainer.appendChild(homeinfo)
    
    contentsContainer.appendChild(menuinfo)
    contentsContainer.appendChild(contactinfo)
    */
    content.appendChild(header)
    content.appendChild(buttonContainer)
    /*
    content.appendChild(contentsContainer)
    */
    
}





export { loadPage };