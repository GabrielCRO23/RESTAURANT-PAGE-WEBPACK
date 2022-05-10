

function loadPage(content) {
    let header = document.createElement("div")
    header.textContent = '한국 식당'
    header.classList.add('header')

    let buttonContainer = document.createElement("div")
    let homeButton = document.createElement("button")
    homeButton.textContent = "Home"
    let menuButton = document.createElement("button")
    menuButton.textContent = "Menu"
    let contactButton = document.createElement("button")
    contactButton.textContent = "Contact"

    buttonContainer.classList.add('button-container')
    buttonContainer.appendChild(homeButton)
    buttonContainer.appendChild(menuButton)
    buttonContainer.appendChild(contactButton)
    content.appendChild(header)
    content.appendChild(buttonContainer)
    
    console.log('ayyy')
}




export { loadPage };