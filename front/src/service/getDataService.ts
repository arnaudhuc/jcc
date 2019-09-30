import axios from "axios";

export interface Message {
  message?: string;
  data: any;
}

// De la bonne utilisation du async/await : https://docs.google.com/presentation/d/1S69pj-cENjHebGkNagMJUKa_Yd9rJoEWFYEOQnqJqU4/edit#slide=id.g584c3d6eeb_0_377

// On utilise le currying pour pouvoir avoir directement des fonctions qui récupère nos player, decks, etc... ( comme ça pas besoin d'écrire 20 fois dans ton code getDataService("player") : https://docs.google.com/presentation/d/1S69pj-cENjHebGkNagMJUKa_Yd9rJoEWFYEOQnqJqU4/edit#slide=id.g5875ecc175_2_13

function getDataService(type: string) {
  return async (): Promise<Message> => {
    try {
      const response = await axios.get(`http://localhost:5656/api/${type}`);

      return {
        data: response.data
      };
    } catch (thrown) {
      let data = {};

      if (axios.isCancel(thrown)) {
        data = thrown.message;
      }

      return {
        message: `Erreur lors de la récupération des données ${type}`,
        data
      };
    }
  };
}

const getPlayerData = getDataService("player");
const getDeckData = getDataService("deck");

export { getPlayerData, getDeckData };
