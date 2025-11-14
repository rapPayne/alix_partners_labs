import { useEffect, useState } from 'react';
import './People.css'
import { PersonCard } from './PersonCard';
import { Person } from './types/Person';

export const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/users")
      .then(res => res.json())
      .then(people => setPeople(people))
  }, [])

  return (
    <article className='People'>
      <h2>All the cool people</h2>
      <section>
        {people.map((person: Person) => <PersonCard person={person} key={person.id} />)}
      </section>
    </article>
  )
}
