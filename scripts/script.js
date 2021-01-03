// JavaScript Document
// ervoor zorgen dat de reacties die er al staan verdwijnen wanneer de details wordt opengeklapt
var opmerkingenButton = document.querySelector("details");

opmerkingenButton.addEventListener("toggle", function verwijderReacties() {
        let BestaandeReacties = document.querySelector("body .homepage article>footer>article");
        BestaandeReacties.classList.toggle("verwijder");
   })