// let digitalClock=()=>{
//     let selectedElem= document.getElementsByTagName('span')

//     // console.log(selectedElem[0].innerText);

//     let dateObj=new Date()

//     let curHrs= dateObj.getHours()
//     selectedElem[0].innerText=curHrs
    
//     selectedElem[1].innerText=dateObj.getMinutes()

//     let curSec=dateObj.getSeconds()
//     selectedElem[2].innerText=curSec

//     selectedElem[3].innerText=dateObj.getDate()

//     let curMon=dateObj.getMonth()
//     switch(curMon){
//         case 5: selectedElem[4].innerText="june"
//         break;
//         case 6:  selectedElem[4].innerText="July";
//         break;
//     }

//     selectedElem[5].innerText=dateObj.getFullYear()

//     let curDate=dateObj.getDay()
//     switch(curDate){
//         case 0: selectedElem[6].innerText="Wednesday"
//         break;
//         case 1: selectedElem[6].innerText="Thursday"
//         break;
//         case 2: selectedElem[6].innerText="Wednesday"
//         break;
//         case 3: selectedElem[6].innerText="Wednesday"
//         break;
//         case 4: selectedElem[6].innerText="Thursday"
//         break;
//     }


//     // Now we use toLocalTimeString, and toLocalDateString simple and easy way...
//     selectedElem[7].innerText=dateObj.toLocaleTimeString()
//     selectedElem[8].innerText=dateObj.toLocaleDateString()
 
// }






let digitalClock=()=>{
    let selectedElem=document.getElementsByTagName('span')

    let dateObj=new Date()

    selectedElem[0].innerText=dateObj.getHours()
    selectedElem[1].innerText=dateObj.getMinutes()
    selectedElem[2].innerText=dateObj.getSeconds()
    selectedElem[3].innerText=dateObj.getDate()
    selectedElem[4].innerText=dateObj.getMonth()
    selectedElem[5].innerText=dateObj.getFullYear()
    
    let day=selectedElem[6].innerText=dateObj.getDay()

    switch(day){
        case 0: selectedElem[6].innerText="sunday";
        break;

        case 1: selectedElem[6].innerText="Monday";
        break;

        case 2:selectedElem[6].innerText="Tuesday";
        break;

        case 3: selectedElem[6].innerText="Wednesday";
        break;
        case 6: selectedElem[6].innerText="Thursday";
        break;
        break;
    }

    
    selectedElem[7].innerText=dateObj.toLocaleDateString()

    selectedElem[8].innerText=dateObj.toLocaleTimeString()
}