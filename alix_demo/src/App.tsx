import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './AboutUs'
import { ContactUs, Home, NotFound, Privacy } from './Other'
import { People } from './People'
import { Person } from './Person'
import React, { useEffect, useState } from 'react'

export const FilmsContext = React.createContext([]);

function App() {
  //#region useContext demo. See also "OurLeaders.tsx"
  const [films, setFilms] = useState([])
  useEffect(() => {
    fetch("http://localhost:3008/films").then(res => res.json()).then(films => setFilms(films))
  }, [])
  //#endregion

  return (
    <div className="App">
      <FilmsContext.Provider value={films}>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/people/:teamName/:id" element={<Person />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
          <p>Copyright us.com &copy; {(new Date()).getFullYear()}</p>
        </footer>
      </FilmsContext.Provider>
    </div>
  )
}

export default App
