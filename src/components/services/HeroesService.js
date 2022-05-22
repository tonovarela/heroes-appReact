import { heroes } from "../../data/heroes";

export class HeroesService {

    getHeroesByPublisher(publisher) {
        const validPublisher = ["DC Comics", "Marvel Comics"];
        if (!validPublisher.includes(publisher)) {
            throw new Error(`${publisher} is not a valid publisher`)
        }
        return heroes.filter(hero => hero.publisher === publisher);
    }

    getHeroById(id) {
        return heroes.find(hero => hero.id === id);
    }

    getHeroesByName(name = '') {          
        console.log("get");
        if (name===""){
            return  [];
        }
        return heroes.filter(heroe=>heroe.superhero.toLowerCase().includes(name.toLowerCase()));
     

    }





}