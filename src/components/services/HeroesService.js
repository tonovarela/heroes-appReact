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
        console.log("getHero");
        return heroes.find(hero => hero.id === id);
    }





}