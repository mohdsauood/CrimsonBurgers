import { loadHeader,loadFooter,navEvents} from "./initialpage";

const mainContentDiv = document.querySelector('#main');

const loadRead=function(){
    console.log('im loadread function')
    mainContentDiv.innerHTML="";
    loadHeader();

    const section_read=document.createElement('section');
    section_read.classList.add('read');

    const section_read_missionSection=document.createElement('section');
    section_read_missionSection.classList.add('read_fixedbackground');

    const section_read_missionSection_div1=document.createElement('div');
    section_read_missionSection_div1.classList.add('read_mission');

    const section_read_missionSection_div1_h5=document.createElement('h5');
    section_read_missionSection_div1_h5.textContent='MISSION';
    section_read_missionSection_div1.appendChild(section_read_missionSection_div1_h5);

    const section_read_missionSection_div1_p=document.createElement('p');
    section_read_missionSection_div1_p.textContent='To establish Crimson Burger as the leading global restaurant chain providing a classic all-american experience';
    section_read_missionSection_div1.appendChild(section_read_missionSection_div1_p);
    section_read_missionSection.appendChild(section_read_missionSection_div1);

    const section_read_missionSection_div2=document.createElement('div');
    section_read_missionSection_div2.classList.add('read_title');

    const section_read_missionSection_div2_p1=document.createElement('p');
    section_read_missionSection_div2_p1.textContent="the original";
    const section_read_missionSection_div2_p2=document.createElement('p');
    section_read_missionSection_div2_p2.textContent="hamburger";

    section_read_missionSection_div2.appendChild(section_read_missionSection_div2_p1);
    section_read_missionSection_div2.appendChild(section_read_missionSection_div2_p2);
    section_read_missionSection.appendChild(section_read_missionSection_div2);

    section_read.appendChild(section_read_missionSection);


    const section_read_foundedSection=document.createElement('section');
    section_read_foundedSection.classList.add('read_founded');

    const section_read_foundedSection_h5=document.createElement('h5');
    section_read_foundedSection_h5.textContent="FOUNDED";
    const section_read_foundedSection_p=document.createElement('p');
    section_read_foundedSection_p.textContent="Crimson Burgers was launched on april 5,1992, in Texas on the belief that everyone deserves a place where they can escape from today’s complicated world and experience the uncomplicated goodness of classic Americana. ";

    section_read_foundedSection.appendChild(section_read_foundedSection_h5);
    section_read_foundedSection.appendChild(section_read_foundedSection_p);

    section_read.appendChild(section_read_foundedSection);

    mainContentDiv.appendChild(section_read);
    loadFooter();
    navEvents();
}

export {loadRead}