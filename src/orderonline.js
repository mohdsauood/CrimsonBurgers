import {loadMenu} from './menu';
import { mainContentDiv } from './initialpage';

const loadOrderonline=function(){
    mainContentDiv.innerHTML="";
    loadMenu();
}

export {loadOrderonline}
