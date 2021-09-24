export default class GotService {

    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }
    isSet(data){
        if(data){
            return data
        } else {
            return 'no data exists'
        }
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    // Characters
    getAllCharacters = async () => {
        const randomPage = Math.floor(Math.random()*140 +25);
        const res = await this.getResource(`/characters?page=${randomPage}&pageSize=10`);
        return res.map( this._transformCharacter)
    }
    getCharacter = async (id) =>{
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    _transformCharacter = (character) => {
        return {
            id: this._extractId(character),
            name: this.isSet(character.name),
            gender: this.isSet(character.gender),
            born: this.isSet(character.born),
            died: this.isSet(character.died),
            culture: this.isSet(character.culture)
        }
    }

    // Books
    getAllBooks = async () => {
        const res = await this.getResource(`/books`);
        return res.map( this._transformBook)
    }
    getBook = async (id) =>{
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            authors: this.isSet(book.authors),
            country: this.isSet(book.country),
            numberOfPages: this.isSet(book.numberOfPages),
            released: this.isSet(book.released)
        }
    }

    // Houses 
    getAllHouses = async () => {
        const res = await this.getResource(`/houses`);
        return res.map( this._transformHouse)
    }
    getHouse = async (id) =>{
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }
    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            coatOfArms: this.isSet(house.coatOfArms),
            founded: this.isSet(house.founded),
            founder: this.isSet(house.founder)
        }
    }
}