class CharactersController {
  constructor(CharactersService) {
    this.characters = [];
    this.CharactersService = CharactersService;
    this.getAll();
  }

  getAll() {
    this.CharactersService.getAll()
      .then(() => {
        this.characters = this.CharactersService.getState();
        console.log(this.characters);
      });
  }

}

CharactersController.$inject = ['CharactersService'];

export {CharactersController};
