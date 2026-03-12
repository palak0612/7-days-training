//by default all the objects or elements on html page are in dom
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button){
       button.addEventListener("click",function(){
        alert("Button Clicked");
       });
});
// high order funtions - take other functions as argument
// first class functions - the argument fucntion
const cards = document.querySelectorAll(".cards");
cards.forEach(function (card){
  card.addEventListener("click", function(){
        card.style.backgroundColor = "red";
  }
);
});

const form