import axios from 'axios'

const publicKey = 'd34067fc44d60c136a1089cdcd06a58e'
const privateKey = 'bfc7cac77c1ff445177784162b60571d0a40d0fb'
const baseUrl = 'http://gateway.marvel.com/v1/public/characters'

const getMarvelCharacters = async (searchQuery) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        apikey: publicKey,
        nameStartsWith: searchQuery,
      },
    })
    return response.data.data.results
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    return [];
  }
}

export default getMarvelCharacters