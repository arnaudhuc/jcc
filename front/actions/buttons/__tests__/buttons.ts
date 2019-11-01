import { displayAllCards } from "../buttons";
import { displayCards } from "../../../canvas/cards";

jest.mock("../../../canvas/cards/");

describe("buttons", () => {
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
