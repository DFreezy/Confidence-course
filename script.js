const modal = document.querySelector('.modal');
const openModal = document.querySelector('.submit');
const closeModal = document.querySelector('.close-modal');
const setting = document.getElementById('setting');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const names = document.getElementById('reason');
const introduction = document.getElementById('intro');



// Event listener to open the settings modal
setting.addEventListener('click', () => {
    settingsModal.showModal();
});

// Event listener to close the settings modal
closeSettings.addEventListener('click', () => {
    settingsModal.close();
});

///////////////////////////////////////////////////name box////////////////////////////////////////////////////////////////////////////
// Event listener to close the course modal
openModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.showModal();
});


closeModal.addEventListener('click', () => {
    modal.close(); // Works if modal is a <dialog> element
    introduction.textContent = `Welcome ${names.value}. Let's change your life today!`;
});

//////////////////////////////////////////////////main menu////////////////////////////////////////////////////////////////////////////
const mainMenu = document.getElementById('main-menu');
const menuModal = document.getElementById('menu-modal');
const menuClosed = document.getElementById('close-menu');

mainMenu.addEventListener('click', () => {
    menuModal.showModal();
})

menuClosed.addEventListener('click', () => {
    menuModal.close();
})

////////////////////////////////////////////////////Day 1//////////////////////////////////////////////////////////////////////////////
const seeMore1 = document.getElementById('see-more1')
const activity1 = document.getElementById('activity1')
const closeActivity1 = document.getElementById('close-activity1')

seeMore1.addEventListener('click', () => {
    activity1.showModal();
});

closeActivity1.addEventListener('click', () => {
    activity1.close();
});
////////////////////////////////////////////////////Day 2//////////////////////////////////////////////////////////////////////////////
const seeMore2 = document.getElementById('see-more2')
const activity2 = document.getElementById('activity2')
const closeActivity2 = document.getElementById('close-activity2')

seeMore2.addEventListener('click', () => {
    activity2.showModal();
});

closeActivity2.addEventListener('click', () => {
    activity2.close();
});
////////////////////////////////////////////////////Day 3//////////////////////////////////////////////////////////////////////////////
const seeMore3 = document.getElementById('see-more3')
const activity3 = document.getElementById('activity3')
const closeActivity3 = document.getElementById('close-activity3')

seeMore3.addEventListener('click', () => {
    activity3.showModal();
});

closeActivity3.addEventListener('click', () => {
    activity3.close();
});
////////////////////////////////////////////////////Day 4//////////////////////////////////////////////////////////////////////////////
const seeMore4 = document.getElementById('see-more4')
const activity4 = document.getElementById('activity4')
const closeActivity4 = document.getElementById('close-activity4')

seeMore4.addEventListener('click', () => {
    activity4.showModal();
});

closeActivity4.addEventListener('click', () => {
    activity4.close();
});
////////////////////////////////////////////////////Day 5//////////////////////////////////////////////////////////////////////////////
const seeMore5 = document.getElementById('see-more5')
const activity5 = document.getElementById('activity5')
const closeActivity5 = document.getElementById('close-activity5')

seeMore5.addEventListener('click', () => {
    activity5.showModal();
});

closeActivity5.addEventListener('click', () => {
    activity5.close();
});
////////////////////////////////////////////////////Day 6//////////////////////////////////////////////////////////////////////////////
const seeMore6 = document.getElementById('see-more6')
const activity6 = document.getElementById('activity6')
const closeActivity6 = document.getElementById('close-activity6')

seeMore6.addEventListener('click', () => {
    activity5.showModal();
});

closeActivity6.addEventListener('click', () => {
    activity6.close();
});
////////////////////////////////////////////////////Day 7//////////////////////////////////////////////////////////////////////////////
const seeMore7 = document.getElementById('see-more7')
const activity7 = document.getElementById('activity7')
const closeActivity7 = document.getElementById('close-activity7')

seeMore7.addEventListener('click', () => {
    activity7.showModal();
});

closeActivity7.addEventListener('click', () => {
    activity7.close();
});

////////////////////////////////////////////////////Day 8//////////////////////////////////////////////////////////////////////////////
const seeMore8 = document.getElementById('see-more8')
const activity8 = document.getElementById('activity8')
const closeActivity8 = document.getElementById('close-activity8')

seeMore8.addEventListener('click', () => {
    activity8.showModal();
});

closeActivity8.addEventListener('click', () => {
    activity8.close();
});

////////////////////////////////////////////////////Day 9////////////////////////////////////////////////////////////////////////////////
const seeMore9 = document.getElementById('see-more9')
const activity9 = document.getElementById('activity9')
const closeActivity9 = document.getElementById('close-activity9')

seeMore9.addEventListener('click', () => {
    activity9.showModal();
});

closeActivity9.addEventListener('click', () => {
    activity9.close();
});

////////////////////////////////////////////////////Day 10//////////////////////////////////////////////////////////////////////////////
const seeMore10 = document.getElementById('see-more10')
const activity10 = document.getElementById('activity10')
const closeActivity10 = document.getElementById('close-activity10')

seeMore10.addEventListener('click', () => {
    activity10.showModal();
});

closeActivity10.addEventListener('click', () => {
    activity10.close();
});

////////////////////////////////////////////////////Day 11////////////////////////////////////////////////////////////////////////////
const seeMore11 = document.getElementById('see-more11')
const activity11 = document.getElementById('activity11')
const closeActivity11 = document.getElementById('close-activity11')

seeMore11.addEventListener('click', () => {
    activity11.showModal();
});

closeActivity11.addEventListener('click', () => {
    activity11.close();
});

////////////////////////////////////////////////////Day 12//////////////////////////////////////////////////////////////////////////////
const seeMore12 = document.getElementById('see-more12')
const activity12 = document.getElementById('activity12')
const closeActivity12 = document.getElementById('close-activity12')

seeMore12.addEventListener('click', () => {
    activity12.showModal();
});

closeActivity12.addEventListener('click', () => {
    activity12.close();
});

////////////////////////////////////////////////////Day 13//////////////////////////////////////////////////////////////////////////////
const seeMore13 = document.getElementById('see-more13')
const activity13 = document.getElementById('activity13')
const closeActivity13 = document.getElementById('close-activity13')

seeMore13.addEventListener('click', () => {
    activity13.showModal();
});

closeActivity13.addEventListener('click', () => {
    activity13.close();
});

////////////////////////////////////////////////////Day 14////////////////////////////////////////////////////////////////////////////////
const seeMore14 = document.getElementById('see-more14')
const activity14 = document.getElementById('activity14')
const closeActivity14 = document.getElementById('close-activity14')

seeMore14.addEventListener('click', () => {
    activity14.showModal();
});

closeActivity14.addEventListener('click', () => {
    activity14.close();
});

///////////////////////////////////////////////////Day 15//////////////////////////////////////////////////////////////////////////////////
const seeMore15 = document.getElementById('see-more15')
const activity15 = document.getElementById('activity15')
const closeActivity15 = document.getElementById('close-activity15')

seeMore15.addEventListener('click', () => {
    activity15.showModal();
});

closeActivity15.addEventListener('click', () => {
    activity15.close();
});

///////////////////////////////////////////////////Day 16///////////////////////////////////////////////////////////////////////////////////
const seeMore16 = document.getElementById('see-more16')
const activity16 = document.getElementById('activity16')
const closeActivity16 = document.getElementById('close-activity16')

seeMore16.addEventListener('click', () => {
    activity16.showModal();
});

closeActivity16.addEventListener('click', () => {
    activity16.close();
});

///////////////////////////////////////////////////Day 17///////////////////////////////////////////////////////////////////////////////////
const seeMore17 = document.getElementById('see-more17')
const activity17 = document.getElementById('activity17')
const closeActivity17 = document.getElementById('close-activity17')

seeMore17.addEventListener('click', () => {
    activity17.showModal();
});

closeActivity17.addEventListener('click', () => {
    activity17.close();
});

///////////////////////////////////////////////////Day 18////////////////////////////////////////////////////////////////////////////////////
const seeMore18 = document.getElementById('see-more18')
const activity18 = document.getElementById('activity18')
const closeActivity18 = document.getElementById('close-activity18')

seeMore18.addEventListener('click', () => {
    activity18.showModal();
});

closeActivity18.addEventListener('click', () => {
    activity18.close();
});

////////////////////////////////////////////////Day 19///////////////////////////////////////////////////////////////////////////////////////
const seeMore19 = document.getElementById('see-more19')
const activity19 = document.getElementById('activity19')
const closeActivity19 = document.getElementById('close-activity19')

seeMore19.addEventListener('click', () => {
    activity19.showModal();
});

closeActivity19.addEventListener('click', () => {
    activity19.close();
});