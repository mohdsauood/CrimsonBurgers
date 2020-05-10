import {loadMenu} from './menu';
import {loadOrderonline} from './orderonline';
import {loadRead} from './read';

const mainContentDiv = document.querySelector('#main');

const loadHeader = function(){
    const sectionContactInfo = document.createElement('section');
    sectionContactInfo.classList.add('contactInfo');
    const sectionContactInfo_p=document.createElement('p');
    sectionContactInfo_p.innerHTML="home delivery : 600 - Crimsons (600-564-669) <span>Crimson deals</span>";
    sectionContactInfo.appendChild(sectionContactInfo_p);
    mainContentDiv.appendChild(sectionContactInfo);

    const nav = document.createElement('nav');
    const nav_logoSection=document.createElement('section');
    const nav_logoSection_icon=document.createElement('i');
    nav_logoSection_icon.classList.add('fas','fa-hamburger','fa-6x');
    nav_logoSection.appendChild(nav_logoSection_icon);
    nav.appendChild(nav_logoSection);

    const nav_ul=document.createElement('ul');
    const nav_ul_arr=['menu','visit','read','orderOnline'];
    nav_ul_arr.forEach((item)=>{
        let nav_ul_li=document.createElement('li');
        nav_ul_li.textContent=item;
        nav_ul_li.id=`nav_${item}`;
        nav_ul_li.classList.add('hvr-underline-from-center');
        nav_ul.appendChild(nav_ul_li);
    });
    nav.appendChild(nav_ul);
    mainContentDiv.appendChild(nav);

}

const loadVisit=function(){
    const sectionJumbotron=document.createElement('section');
    sectionJumbotron.classList.add('jumbotron');
    const sectionJumbotron_h3_arr=['Our Passion','Your Burger'];
    sectionJumbotron_h3_arr.forEach((item)=>{
        let sectionJumbotron_h3=document.createElement('h3');
        sectionJumbotron_h3.textContent=item;
        sectionJumbotron.appendChild(sectionJumbotron_h3);
    })
    const sectionJumbotron_button=document.createElement('button');
    sectionJumbotron_button.textContent='Order Now';
    sectionJumbotron.appendChild(sectionJumbotron_button);
    mainContentDiv.appendChild(sectionJumbotron);

    const sectionMiniJumbotron=document.createElement('section');
    sectionMiniJumbotron.classList.add('miniJumbotron');
    const sectionMiniJumbotron_h2=document.createElement('h2');
    sectionMiniJumbotron_h2.textContent='FIND YOUR CRIMSON BURGERS';
    const sectionMiniJumbotron_p=document.createElement('p');
    sectionMiniJumbotron_p.textContent='ORDER ONLINE AT SELECT LOCATIONS';
    sectionMiniJumbotron.appendChild(sectionMiniJumbotron_h2);
    sectionMiniJumbotron.appendChild(sectionMiniJumbotron_p);
    mainContentDiv.appendChild(sectionMiniJumbotron);
}

const loadFooter=function(){
    const footer=document.createElement('footer');
    const footer_obj={
        section1:['FYI','News & Press'],
        section2:['WHATS\'S UP','eClub Sign-Up','Crimson Deals'],
        section3:['PLAY HARD','Work With Us','Locations'],
    }
    for(let element in footer_obj){
        let footer_section=document.createElement('section');
        let footer_section_h6=document.createElement('h6');
        let [first,...rest]=footer_obj[element];
        footer_section_h6.textContent=first;
        footer_section.appendChild(footer_section_h6);
        rest.forEach((item)=>{
            let footer_section_p=document.createElement('p');
            footer_section_p.textContent=item;
            footer_section.appendChild(footer_section_p);
        })
        footer.appendChild(footer_section);
    }
    mainContentDiv.appendChild(footer);

    const copyrightDiv=document.createElement('div');
    copyrightDiv.classList.add('copyright')
    copyrightDiv.textContent='Crimson Burgers © 2020';
    mainContentDiv.appendChild(copyrightDiv);
}

const navEvents=function(){
    const nav_menu_button=document.querySelector('#nav_menu');
    nav_menu_button.addEventListener('click',loadMenu);

    const nav_visit_button=document.querySelector('#nav_visit');
    nav_visit_button.addEventListener('click',()=>{
        mainContentDiv.textContent="";
        loadHeader();
        loadVisit();
        loadFooter();
        navEvents();
    });

    const nav_orderOnline_button=document.querySelector('#nav_orderOnline');
    nav_orderOnline_button.addEventListener('click',loadOrderonline);

    const nav_read_button=document.querySelector('#nav_read');
    nav_read_button.addEventListener('click',loadRead)
}

export {mainContentDiv,loadVisit,loadHeader,loadFooter,navEvents}