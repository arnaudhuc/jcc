import { displayAllCards } from '../buttons';
import { displayCards } from '../../../canvas/cards';

jest.mock('../../../canvas/cards/');

describe('buttons', () => {
  test('should call displayCard when displayAllCards is called', () => {
    document.body.innerHTML = '<button id="display-all-cards"></button>';

    const displayAllCardsButton = document.getElementById(
      'display-all-cards',
    ) as HTMLButtonElement;

    displayAllCards();
    displayAllCardsButton.click();

    expect(displayCards).toBeCalled();
  });
});
