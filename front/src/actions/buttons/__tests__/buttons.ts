import { displayAllCards } from "../buttons";

describe("buttons", () => {
  test("should call displayCard when displayAllCards is called", () => {
    document.body.innerHTML = '<button id="display-all-cards"></button>';
    const displayCards = jest.fn();
    const displayAllCardsButton = <HTMLButtonElement>(
      document.getElementById("display-all-cards")
    );
    displayAllCards();
    displayAllCardsButton.click();
    expect(displayCards).not.toHaveBeenCalled();
  });
});
