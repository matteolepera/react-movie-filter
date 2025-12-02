import { useEffect, useState } from 'react'
import logo from "./assets/img/notflix-logo.png"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { films } from "./data/films"


function App() {

  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredGenre, setFilteredGenre] = useState(films);

  useEffect(() => {
    if (selectedGenre === "Seleziona un genere" || selectedGenre === "") {
      setFilteredGenre(films);
      return
    }
    const filterGenreArray = films.filter((film) => film.genre === selectedGenre);
    setFilteredGenre(filterGenreArray);
  }, [selectedGenre])


  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt={logo} width="100" height="24" className="d-inline-block align-text-top" />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">

          <select className="form-select mt-3"
            value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
            <option value="">Seleziona un genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>

          <div className="row">

            {filteredGenre.map((film, index) =>
              <div key={index} className="col-4 mt-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{film.genre}</h6>
                    <p className="card-text">Descrizione:</p>
                    <a href="#" className="card-link">Aggiungi nei preferiti</a>
                    <a href="#" className="card-link">Guarda ora!</a>
                  </div>
                </div>
              </div>
            )}


          </div>

        </div>

      </main >

    </>
  )
}

export default App
