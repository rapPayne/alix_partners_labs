import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './AboutUs'
import { ContactUs, Home, NotFound, Privacy } from './Other'
import { People } from './People'
import { Person } from './Person'

function App() {

  return (
    <div className="App">
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
    </div>
  )
}

export default App
