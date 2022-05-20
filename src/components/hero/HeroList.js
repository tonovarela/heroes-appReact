import { HeroesService } from "../services/HeroesService";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher = "DC" }) => {
    const heroeService = new HeroesService();
    const heroes = heroeService.getHeroesByPublisher(publisher);
    return (
        <>
            <h1>Hero List  - {publisher}</h1>
            <hr className="mb-3"></hr>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map(heroe => (<HeroCard key={heroe.id}  {...heroe} ></HeroCard>))
                }
            </div>
        </>
    )
}
