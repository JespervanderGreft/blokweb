// JavaScript Document
// Zorgt ervoor dat de class veranderd wordt van de like button en die triggerd meteen ook een animatie
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