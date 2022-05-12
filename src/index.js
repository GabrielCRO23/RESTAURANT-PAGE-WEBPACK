import { loadPage } from './page-load';
import { homeTabber, menuTabber, contactTabber } from './tabswitcher';

let content = document.getElementById('content');



loadPage(content);
/*
homeButton.addEventListener("click", function(){
    homeTabber()
})
*/
homeButton.addEventListener("click", function(){
    homeTabber()
    console.log(contentsContainer)
}, { once: true })

menuButton.addEventListener("click", function(){
    menuTabber()
}, { once: true })

contactButton.addEventListener("click", function(){
    contactTabber()
}, { once: true })
