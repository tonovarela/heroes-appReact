import { useParams,Navigate, useNavigate } from "react-router-dom"
import { HeroesService } from "../services/HeroesService";

export const HeroScreen = () => {
  const navigate = useNavigate();
  const {heroeId}= useParams();
  console.log(heroeId);

  const heroeService = new HeroesService();
  const heroe=heroeService.getHeroById(heroeId);
  if (!heroe){
    return <Navigate to="/"> </Navigate>    
  }

  const imagePath =`/assets/${heroe.id}.jpg`;
  const regresar =()=>{    
    navigate(-1);
    
  }
  return (
    <>
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={heroe.superhero} className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group ">
          <li className="list-group-item"><b>Alter ego:</b>{heroe.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b>{heroe.publisher}</li>
          <li className="list-group-item"><b>First apereance:</b>{heroe.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{heroe.characters}</p>

        <button className="btn btn-outline-info"  onClick={regresar}>Regresar</button>
      </div>
    </div>
    </>
  )
}
