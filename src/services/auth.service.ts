const baseUrl: string = "https://rickandmortyapi.com/api/";

const getCharacter: string = baseUrl + "character/";

export const getMorty = () => {
  return fetch(getCharacter + "?name=morty")
    .then((res) => res.json())
    .then((res) => res.results[0]);
};
