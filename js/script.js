
// // tell Barba to use the css plugin
// barba.use(barbaCss);



//Apparition

//1) Déclare/ selectionne
const titre = document.querySelector('.titre');
const btn = document.querySelector('.btn-marquee');
const cercle = document.querySelector('.cercle');
const japonais = document.querySelector('.japonais');
const horloge = document.querySelector('#p1');
const nav = document.querySelector('.nav');
const welcome = document.querySelector('.welcome');

window.addEventListener('load', () =>{

const TL = gsap.timeline({ paused : true});

//permet d'animer les un à la suite des autres (staggerFrom) 
TL
.from(titre, 1.5, { left : -50, opacity: 0, ease: "power1.out"},1,5)
.from(cercle, 1.5, { bottom : 100, opacity: 0, ease: "power1.out"},1)
.from(welcome, 1, { top : -50, opacity: 0, ease: "power1.out"}, 0.3)
.from(nav, 1.5, { top : -500, opacity: 0, ease: "power1.out"}, 0.3)
.from(horloge, 1, { right : -50, opacity: 0, ease: "power1.out"}, 0.3)
.from(japonais, 1, { top : -50, opacity: 0, ease: "power1.out"}, 0.3)
.from(btn, 2, { right : -50, opacity: 0, ease: "power1.out"}, 1)





TL.play();
})


// ANIMATION POUR LE ALL MY PROJECT
const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(item =>{
    //pour avoir toutes les lettres
    const letters = item.children[0].textContent.split('');
    // console.log(letters);
    item.innerHTML = "";

    letters.forEach((el, index)=>{

        item.innerHTML += `<a style="transition-delay: ${0.07 * index}s">${el}</a>`
    })

});


//Work
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 30}px`
    cursor.style.left = `${e.pageX - 30}px`
})

const allLinks = document.querySelectorAll('nav ul li');

allLinks.forEach(link => {

    const location = link.getAttribute('data-loc');

    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(img/${location}.jpg)`;
    })

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
    })

});


// Horloge + date
let date1 = new Date();

let dateLocale = date1.toLocaleString('en-EN',{
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

document.getElementById('p1').innerHTML =   dateLocale;
// Horloge + date FIN


// let date1 = Date();
// let date2 = Date.now();

// document.getElementById('p1').innerHTML = date1;
// document.getElementById('p2').innerHTML = date2;

// window.onload=function() {
//     horloge('div_horloge');
//   };
   
//   function horloge(el) {
//     if(typeof el=="string") { el = document.getElementById(el); }
//     function actualiser() {
//       var date = new Date();
//       var str = date.getHours();
//       str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
//       el.innerHTML = str;
//     }
//     actualiser();
//     setInterval(actualiser,1000);
//   }

// // init Barba
// barba.init({
//     transitions: [

//         {
//             //nom de la transition
//             name: 'fade',
//             to: {
//                 //data name
//                 namespace: ['clip']
//             },
//             leave(){},
//             enter(){}
//         },
//         {
//             name: 'test',
//             to: {
//                 namespace: ['home']
//             },
//             leave(){},
//             enter(){}
//         },
//         {
//             name: 'clip',
//             sync:true,
//             to: {
//                 namespace: ['cover']
//             },
//             beforeEnter() {
//                 console.log("beforeEnter")
//             },
//             beforeLeave() {
//                 console.log("beforeLeave")
//             },
//             leave(){},
//             afterLeave() {
//                 console.log("afterLeave");
//             },
//             enter(){}
//         },

      
//     ]
// });