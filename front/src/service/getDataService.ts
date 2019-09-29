import axios from 'axios';

interface Message {
  message?: string
  data: object
}

async function getDataService(type: String){
  return await axios.get(`http://localhost:5656/api/${type}`)
  .catch(function (thrown): Message {
    let data = {};
    if (axios.isCancel(thrown)) {
      data = thrown.message;
    }
    return {
      message: `Erreur lors de la récupération des données ${type}`,
      data: data
    }
  })
  .then(function (response): Message {
    // handle success
    return {
      data: response.data
    }
  });
}

export default getDataService;
