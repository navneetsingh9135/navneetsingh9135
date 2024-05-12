
//to expand the the card when clicked
document.addEventListener("DOMContentLoaded", function() {
    const cardBodies = document.querySelectorAll("#btech-cse .card-body");
  
    cardBodies.forEach(function(cardBody) {
      cardBody.addEventListener("click", function() {
        this.classList.toggle("expanded");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll("#pyq .card");
  
    cards.forEach(card => {
      const cardBody = card.querySelector(".card-body");
  
      card.addEventListener("click", function() {
        cardBody.classList.toggle("expanded");
      });
    });
  });
  
  
  