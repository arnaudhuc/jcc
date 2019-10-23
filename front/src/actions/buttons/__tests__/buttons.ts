import { displayAllCards } from "../buttons";
import { displayCards } from "../../../canvas/cards/";

describe("buttons", () => {
  jest.mock("../../../canvas/cards/displayAllCards.ts");

  test("should call displayCard when displayAllCards is called", () => {
    document.body.innerHTML = '<button id="display-all-cards"></button>';

    const displayAllCardsButton = <HTMLButtonElement>(
      document.getElementById("display-all-cards")
    );

    displayAllCards();
    displayAllCardsButton.click();

    expect(displayCards).toBeCalled();
  });
});
