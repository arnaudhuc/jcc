import { displayCards } from "../../canvas/cards";

export function displayAllCards() {
  const displayAllCardsButton = <HTMLButtonElement>(
    document.getElementById("display-all-cards")
  );

  displayAllCardsButton.addEventListener("click", () => {
    displayCards();
  });
}
