import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { HeroesService } from "../services/HeroesService";


export const SearchScreen = () => {

  const [params] = useSearchParams();
  const termino = params.get('q') ?? '';

  const [formValues, handleInputChange] = useForm({
    searchText: termino
  });
  const navigate = useNavigate();

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => {
    const heroeService = new HeroesService();
    return heroeService.getHeroesByName(termino)
  }, [termino])

  const handledSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr></hr>
          <form onSubmit={handledSearch}>
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              className="form-control"
              name="searchText"
              placeholder="Buscar un héroe" />

            <button className="btn btn-outline-primary mt-1 w-100" type="submit">
              Buscar...
            </button>

          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr>
          </hr>
          {
            (termino === '')
              ? <div className="alert alert-info">Buscar un heroe</div>
              : (heroesFilter.length === 0) && <div className="alert alert-danger">No hay resultados : {termino}</div>
          }

          {
            heroesFilter.map(heroe =>
            (
              <HeroCard key={heroe.id} {...heroe}></HeroCard>
            )
            )
          }
        </div>
      </div>
    </>
  )
}
