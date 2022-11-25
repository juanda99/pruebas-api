import axios from 'axios'

export const pedirPictos = async (searchText) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api
  const endPoint = `https://api.arasaac.org/api/pictograms/es/search/${searchText}`

  try {
    const pictos = await axios.get(endPoint)
    console.log(pictos)
  } catch (error) {
    console.log(error)
  }
}
