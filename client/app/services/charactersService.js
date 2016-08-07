const charactersService = ($http, $q) => {
  let allCharacters = [];


  const getAll = () => {
    return $http.get(`http://localhost:3000/characters?`)
      .then(({data}) => {
        allCharacters = data.map(character => {
          character.slug = character.name.replace(/\s+/g, '-');
          return character;
        });
      });
  };


  const getState = () => {
    return allCharacters;
  };


  return {getAll, getState};
};

charactersService.$inject = ['$http', '$q'];

export {charactersService};
