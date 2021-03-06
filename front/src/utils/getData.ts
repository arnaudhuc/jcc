// De la bonne utilisation du async/await : https://docs.google.com/presentation/d/1S69pj-cENjHebGkNagMJUKa_Yd9rJoEWFYEOQnqJqU4/edit#slide=id.g584c3d6eeb_0_377

// On utilise le currying pour pouvoir avoir directement des fonctions qui récupère nos player, decks, etc... ( comme ça pas besoin d'écrire 20 fois dans ton code getDataService("player") : https://docs.google.com/presentation/d/1S69pj-cENjHebGkNagMJUKa_Yd9rJoEWFYEOQnqJqU4/edit#slide=id.g5875ecc175_2_13

function getDataService(type: string) {
  return async (id?: string) => {
    try {
      const URI = id
        ? `http://localhost:5656/api/${type}/${id}`
        : `http://localhost:5656/api/${type}`;
      const data = await fetch(URI).then(response => {
        if (response.ok) {
          return response.json().then(data => data);
        } else {
          return {
            message: "error"
          };
        }
      });
      return {
        data
      };
    } catch (thrown) {
      let data = {};

      return {
        message: `Erreur lors de la récupération des données`,
        data
      };
    }
  };
}

const getPlayerData = getDataService("players");
const getDeckData = getDataService("decks");
const getCardsData = getDataService("cards");

export { getPlayerData, getDeckData, getCardsData };
