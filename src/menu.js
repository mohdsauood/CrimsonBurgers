import { loadHeader,loadFooter,navEvents} from "./initialpage";

const mainContentDiv = document.querySelector('#main');

const loadMenu=function(){
    mainContentDiv.innerHTML="";
    loadHeader();
    /*menu contents*/
    const section_menu=document.createElement('section');
    section_menu.classList.add('menu');

    const section_menu_arr=['shakes','burgers','starters','salads','kidsmeal','desserts'];
    section_menu_arr.forEach((item)=>{
        let section_submenu=document.createElement('section');
        section_submenu.classList.add('menu_'+item)
        let section_submenu_h3=document.createElement('h3');
        section_submenu_h3.textContent=item;
        let section_submenu_button=document.createElement('button');
        section_submenu_button.textContent='explore';
        section_submenu.appendChild(section_submenu_h3);
        section_submenu.appendChild(section_submenu_button);
        section_menu.appendChild(section_submenu);
    });
    mainContentDiv.appendChild(section_menu);

    loadFooter();
    navEvents();
}

export {loadMenu}