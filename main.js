(()=>{"use strict";function t(t){e();let n=document.createElement("div"),d=document.createElement("div");console.log("ayy"),content.appendChild(n),"home"==t?(d.textContent="Fine dining - the Korean Way",n.classList.add("contents"),d.classList.add("home"),n.appendChild(d),content.appendChild(n)):"menu"==t?(d.textContent="Menu items",n.classList.add("contents"),d.classList.add("menu"),n.appendChild(d),content.appendChild(n)):"contact"==t&&(d.textContent="Contact",n.classList.add("contents"),d.classList.add("contact"),n.appendChild(d),content.appendChild(n))}function e(){content.innerHTML="";let e=document.createElement("div");e.textContent="한국 식당 by Gabriel",e.classList.add("header");let n=document.createElement("div"),d=document.createElement("button");d.setAttribute("id","homeButton"),d.textContent="Home";let c=document.createElement("button");c.setAttribute("id","menuButton"),c.textContent="Menu";let o=document.createElement("button");o.setAttribute("id","contactButton"),o.textContent="Contact",n.classList.add("button-container"),n.appendChild(d),n.appendChild(c),n.appendChild(o),content.appendChild(e),content.appendChild(n),d.addEventListener("click",(function(){t("home")})),c.addEventListener("click",(function(){t("menu")})),o.addEventListener("click",(function(){t("contact")}))}e()})();