import axios from 'axios';

export async function deezerAxiosData(query) {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: query },
    headers: {
      'x-rapidapi-key': '5c0a793fcamsh8f641034b9cae5ep12272fjsn7bef60a456ae',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.data; // Retorna apenas a parte relevante dos dados
  } catch (error) {
    console.error(error);
    return null; // Retorna null em caso de erro
  }
}
