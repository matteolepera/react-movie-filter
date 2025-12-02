import { useState } from 'react'
import logo from "./assets/img/notflix-logo.png"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { films } from "./data/films"


function App() {

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
          <div className="row">

            {films.map((film, index) =>
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

      </main>

    </>
  )
}

export default App
