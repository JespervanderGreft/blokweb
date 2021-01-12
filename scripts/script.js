// JavaScript Document
// ervoor zorgen dat de reacties die er al staan verdwijnen wanneer de details wordt opengeklapt
var buttonLikeGroot = document.querySelector("button.like-button-groot");
buttonLikeGroot.addEventListener("click", grootliken);

function grootliken() {
        buttonLikeGroot.classList.toggle("grootGeliked");
        console.log("Hello world!");
}

var buttonLikeKlein = document.querySelector("button.like");
buttonLikeKlein.addEventListener("click", kleinliken);

function kleinliken() {
        buttonLikeKlein.classList.toggle("kleinGeliked");
        console.log("Hello world!");
}