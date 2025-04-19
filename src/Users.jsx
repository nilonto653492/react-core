import { use } from "react"

export default function Users({ fetchUsers }) {
    
const users = use(fetchUsers);

console.log(users);

    return (
      <div className="n-card">
        <h3>Users:</h3>
      </div>
    )
}
  