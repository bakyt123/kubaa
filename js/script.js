// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelector('.promo__adv'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBG = document.querySelector('.promo__bg'),
      widthBG = document.querySelector('.promo__content'),
      spisok = document.querySelectorAll('.promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list'),
      bb = document.querySelector('.bb'),
      bd = document.querySelector('.bd'),
     close = document.querySelector('.close');
    

   




    
    


/////////////////////////////////////////




      adv.remove();


      /////////////////////////////////////////


      promoGenre.textContent = 'Драма';


      /////////////////////////////////////////


      promoBG.style.backgroundImage = 'url("img/bg.jpg")'; 
    //   promoBG.style.backgroundSize = 'cover';


      /////////////////////////////////////////


    //   widthBG.style.width = 'calc(100% - 300px)';
      


// /////////////////////////////////////////
      
//       // max-width:100%;
//       // max-height:100%;
//       // promoBG.style.objectFit = 'fill'; 
//       // promoBG.style.width = '2000px'; 
      
//       // center center/cover no-repeat



// /////////////////////////////////////////


const movieDB = {
    movies: [
        "B",
        "E",
        "D",
        "C",
        "A"
    ]
};

const movieDD = {
    movies: [
        "r",
        "p",
        "o",
        "g",
        "f"
    ]
};



// /////////////////////////////////////////

// // 1 способ мой

// // spisok.forEach(item => { 
// //     for (let i = 0;i < 5; i++){
// //         let j = 0;
// //         item.textContent = movieDB.movies[j];
// //         j++;
// //         return item;
// //     }
  
// // });

// /////////////////////////////////////////

// // корректировака под его

// // spisok.forEach(item => { 
// //     for (let i = 0;i < 5; i++){
// //         let j = 0;
// //         item.textContent = `${movieDB.movies[j]}`;
// //         j++;
// //     }
  
// // });

// // console.log(spisok[1]);



// /////////////////////////////////////////


// // лучший вариант 

// // for (let i = 0;i < spisok.length;i++){
// //     spisok[i].textContent = `${i+1} ${movieDB.movies[i]}`;
// // }

// ///

movieDB.movies.sort();
movieDD.movies.sort();

// for (let i = 0;i < 5;i++){
//     spisok[i].textContent = `${i+1} ${movieDB.movies[i]}`;
// }


/////////////////////////////////////////

// мой эксперимент

bd.onclick = function () {
 for (let i = 0;i < 5;i++){
    spisok[i].textContent = `${i+1} ${movieDB.movies[i]}`;
}

spisok[0].style.transition = '0.5s';
spisok[0].style.opacity = '1';
    spisok[0].style.marginTop = '0px';
    spisok[0].style.marginLeft = '0px';
    
    spisok[1].style.transition = '0.8s';
    spisok[1].style.opacity = '1';
    spisok[1].style.marginLeft = '0px';

    spisok[2].style.transition = '1.1s';
    spisok[2].style.opacity = '1';
    spisok[2].style.marginLeft = '0px';

    spisok[3].style.transition = '1.4s';
    spisok[3].style.opacity = '1';
    spisok[3].style.marginLeft = '0px';

    spisok[4].style.transition = '1.4s';
    spisok[4].style.opacity = '1';
    spisok[4].style.marginTop = '0px';
    spisok[4].style.marginLeft = '0px';
    bb.style.transition = '2s';
bb.style.opacity = '1';
close.style.transition = '2s';
close.style.opacity = '1';


} ;

close.onclick = function () {
    spisok[0].style.transition = '5s';
    spisok[0].style.opacity = '0';
    spisok[0].style.marginTop = '-2000px';
    spisok[0].style.marginLeft = '0px';
    
    spisok[1].style.transition = '2s';
    spisok[1].style.opacity = '0';
    spisok[1].style.marginLeft = '-500px';

    spisok[2].style.transition = '3s';
    spisok[2].style.opacity = '0';
    spisok[2].style.marginLeft = '2000px';

    spisok[3].style.transition = '4s';
    spisok[3].style.opacity = '0';
    spisok[3].style.marginLeft = '-500px';

    spisok[4].style.transition = '5s';
    spisok[4].style.opacity = '0';
    spisok[4].style.marginTop = '1000px';
    spisok[4].style.marginLeft = '0px';

    bb.style.opacity = '0';
    close.style.opacity = '0';

};

bb.onclick = function () {
    for (let i = 0;i < 5;i++){
        spisok[i].textContent = `${i+6} ${movieDD.movies[i]}`;
    }
    spisok[0].style.transition = '0.5s';
    spisok[0].style.marginLeft = '50px';
    spisok[1].style.transition = '0.8s';
    spisok[1].style.marginLeft = '50px';
    spisok[2].style.transition = '1.1s';
    spisok[2].style.marginLeft = '50px';
    spisok[3].style.transition = '1.4s';
    spisok[3].style.marginLeft = '50px';
    spisok[4].style.transition = '1.7s';
    spisok[4].style.marginLeft = '50px';
    
} ;






// /////////////////////////////////////////


// // ЕГО СПОСОБ


// movieList.innerHTML = "";
// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });

////////////////////////////////////////

// ВЕСЬ ЕГО СПОСОБ !!!!!!!!!!!!!!!!!!!!!!!



// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';

// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });