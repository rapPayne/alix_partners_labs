import { Link, useNavigate, useParams } from "react-router-dom";
import { NotFound } from "./Other";
import { toast } from "sonner";

export const Person = () => {
  const navigate = useNavigate();
  const { id, teamName } = useParams();
  if (+(id ?? 0) <= 0)
    return <NotFound />

  return (
    <>
      <h1>Person #{id}</h1>
      {/* <p>{person.first} {person.last}</p>
      <p>Email: {Person.email}</p> */}
      <form>
        <div>
          <label for="first">First</label>
          <input id="first" autoComplete="off" />
        </div>
      </form>
      <div>
        <Link to={`/person/${id}/edit`}>Edit</Link>
        <button onClick={() => deletePerson(id)}>Delete</button>
      </div>
    </>
  )

  async function deletePerson(id: number): Promise<void> {
    const res = await fetch(`http://localhost:3008/users/${id}`, { method: "DELETE" })
    if (res.ok) {
      toast.success(`Person ${id} deleted`, { duration: 5000, dismissible: true })
      navigate("/people");
    } else {
      toast.error(`Couldn't delete person ${id}. Please try again`, {})
    }
  }

}