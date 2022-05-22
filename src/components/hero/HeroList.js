import { useMemo } from "react";
import { HeroesService } from "../services/HeroesService";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher  }) => {
    
    const heroes = useMemo(() => {
        const heroeService = new HeroesService();
        return heroeService.getHeroesByPublisher(publisher);        
    }, [publisher])

    return (
        <>
            <h1>Hero List  - {publisher}</h1>
            <hr className="mb-3"></hr>
            <div className="row rows-cols-1 row-cols-md-3 g-3  animate__animated animate__fadeIn">
                {
                    heroes.map(heroe => (<HeroCard key={heroe.id}  {...heroe} ></HeroCard>))
                }
            </div>
        </>
    )
}
