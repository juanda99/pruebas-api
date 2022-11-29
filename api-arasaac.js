import axios from 'axios'

export const pedirPictos = async (searchText) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api
  const endPoint = `https://api.arasaac.org/api/pictograms/es/search/${searchText}`

  try {
    const { data: pictos } = await axios.get(endPoint)
    console.log(pictos)
    const imgArray = pictos.map(
      ({ _id }) => `https://static.arasaac.org/pictograms/${_id}/${_id}_500.png`
    )
    console.log(imgArray)
  } catch (error) {
    console.log(error)
  }
}

export const cargarKeywords = async (locale) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api
  const endPoint = `https://api.arasaac.org/api/keywords/${locale}`
  try {
    const { data } = await axios.get(endPoint)
    console.log(data.words)
    console.log(data.words.length)
  } catch (error) {
    console.log(error)
  }
}
