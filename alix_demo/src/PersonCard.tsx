import { useNavigate } from 'react-router-dom';
import './PersonCard.css';
import { Person } from './types/Person';

interface Props {
  person: Person
}
export const PersonCard = ({ person }: Props) => {
  const navigate = useNavigate()
  return (
    <section className="PersonCard" onClick={() => navigate(`/people/${person.id}`)}>
      <div>
        <img src={person.imageUrl} alt={person.first} />
        <h3>{person.first} {person.last}</h3>
      </div>
      <div className="data">
        <p className="label">Phone</p><p>{person.phone}</p>
        <p className="label">Email</p><p>{person.email}</p>
      </div>
    </section >
  )
}