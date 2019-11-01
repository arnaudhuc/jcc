function deleteDataService(type: string) {
  return async (id: string) => {
    try {
      const URI = `http://localhost:5656/api/${type}/${id}`;
      const fetchOptions = {
        method: 'DELETE',
      };
      const data = await fetch(URI, fetchOptions).then(response => {
        if (response.ok) {
          return response.json().then(data => data);
        } else {
          return {
            message: 'error',
          };
        }
      });
      return {
        data,
      };
    } catch (thrown) {
      const data = {};

      return {
        message: `Erreur lors de la suppresion des données`,
        data,
      };
    }
  };
}

const deletePlayerData = deleteDataService('players');
const deleteDeckData = deleteDataService('decks');
const deleteCardsData = deleteDataService('cards');

export { deletePlayerData, deleteDeckData, deleteCardsData };
