function addDataService(type: string) {
  return async (body: any) => {
    try {
      const URI = `http://localhost:5656/api/${type}/`;
      const fetchOptions = {
        method: 'ADD',
        header: 'application/json',
        body: body
      }
      const data = await fetch(URI, fetchOptions).then((response) => {
        if (response.ok) {
          return response.json().then(data => data)
        } else {
          return {
            message: 'error'
          }
        }
      })
      return {
        data
      };
    } catch (thrown) {
      let data = {};

      return {
        message: `Erreur lors de la suppresion des données`,
        data
      };
    }
  };
}

const addPlayerData = addDataService("players");
const addDeckData = addDataService("decks");
const addCardsData = addDataService("cards");

export { addPlayerData, addDeckData, addCardsData };