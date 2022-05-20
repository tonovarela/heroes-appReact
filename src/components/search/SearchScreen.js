import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm();

  const { searchText } = formValues;

  const handledSearch = (e) => {
    e.preventDefault();
    console.log(formValues);
  }
  return (
    <>
      <h1>Search</h1>

      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr></hr>
          <form onSubmit={ handledSearch }>
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
      </div>
    </>
  )
}
