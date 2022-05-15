import { loadPage } from './page-load';
import { tabber } from './tabswitcher';

//let content = document.getElementById('content');

loadPage() 

/*
homeButton.addEventListener("click", function(){
    homeTabber()
})
*/
/*
btnNames.forEach(btnName => {
    var btn = document.getElementById(btnName);
    btn.addEventListener('click', () => {
      currentTab = changeBtnCover(currentTab, btn.id);
      if (btn.id == 'home') {
        loadMain(btn.id, content, reviews, homeTitle, info);
      } else if (btn.id == 'menu') {
        loadMain(btn.id, content, menu, menuTitle);
      } else {
        loadMain(btn.id, content, contacts, contactTitle);
      }
    });
  })

*/

homeButton.addEventListener("click", function(){
    

    tabber('home')
   
})

menuButton.addEventListener("click", function(){
     
    tabber('menu')
})

contactButton.addEventListener("click", function(){
     
    tabber('contact')
})
 
