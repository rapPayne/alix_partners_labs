import { useContext } from "react"
import { FilmsContext } from "./App"

export const FavFilms = () => {
  const films = useContext(FilmsContext);  // Consuming the context. See App.tsx for the other half of this -- the writing to context half.
  return (
    <section className="FavFilms">
      <h3>Our favorite movies</h3>
      {films.map((film) => (
        <div>
          <h4>{film.title}</h4>
          <img src={film.imageUrl} alt="" />
        </div>
      ))}
    </section>
  )
}