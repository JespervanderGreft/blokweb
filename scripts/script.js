// JavaScript Document
// ervoor zorgen dat de reacties die er al staan verdwijnen wanneer de details wordt opengeklapt
var buttonLikeGroot = document.querySelector("button.like-button-groot");
buttonLikeGroot.addEventListener("click", liken);

function liken() {
        buttonLikeGroot.classList.toggle("geliked");
}