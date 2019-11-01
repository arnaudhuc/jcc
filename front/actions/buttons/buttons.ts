import { displayCards } from '../../canvas/cards';

const displayAllCards: any = function() {
  const displayAllCardsButton = document.getElementById(
    'display-all-cards',
  ) as HTMLButtonElement;

  displayAllCardsButton.addEventListener('click', () => {
    displayCards();
  });
};

export { displayAllCards };
