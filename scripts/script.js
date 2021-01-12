// JavaScript Document
// ervoor zorgen dat de reacties die er al staan verdwijnen wanneer de details wordt opengeklapt
var buttonLikeGroot = document.querySelector("button.like-button-groot");

// for (i = 0; i < buttonLikeGroot.length; i++) {
//         buttonLikeGroot[i].addEventListener("click", grootliken);
//       }

buttonLikeGroot.addEventListener("click", grootliken);

function grootliken() {
        buttonLikeGroot.classList.toggle("grootGeliked");
}

// var buttonLikeKlein = document.querySelector("button.like");
// buttonLikeKlein.addEventListener("click", kleinliken);

// function kleinliken() {
//         buttonLikeKlein.classList.toggle("kleinGeliked");
//         console.log("Hello world!");
// }