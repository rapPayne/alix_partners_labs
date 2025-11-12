import { useEffect, useState } from 'react';
import './People.css'
import { PersonCard } from './PersonCard';


export const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/users")
      .then(res => res.json())
      .then(people => people.map(p => ({ ...p, random: Math.random() })))
      .then(people => setPeople(people))
  }, [])

  return (
    <article className='People'>
      <h2>All teh cool people</h2>
      <section>
        {people.map((person) => <PersonCard person={person} foo={1} bar={true} key={person.id} />)}
      </section>
    </article>
  )
}
