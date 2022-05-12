import { loadPage } from './page-load';
import { homeTabber, menuTabber, contactTabber } from './tabswitcher';

let content = document.getElementById('content');



loadPage(content);
/*
homeButton.addEventListener("click", function(){
    homeTabber()
})
*/
homeButton.addEventListener("click", homeTabber)
