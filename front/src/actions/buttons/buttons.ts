import { displayCards } from "../../canvas/cards";

const displayAllCards: any = function() {
  const displayAllCardsButton = <HTMLButtonElement>(
    document.getElementById("display-all-cards")
  );

  displayAllCardsButton.addEventListener("click", () => {
    displayCards();
  });
};

export { displayAllCards };
