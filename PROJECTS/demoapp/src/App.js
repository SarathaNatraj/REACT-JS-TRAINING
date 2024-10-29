import { useState } from "react";
import Footer from "./Footer";
import Todolist from "./Todolist";
function App() {
  const [username, setUsername] = useState('Dhiraj');
  const [users, setUsers] = useState(['Peter', 'James']);

  const [person, setPerson] = useState({ firstname: 'Peter', lastname: 'Parker', age: 25 });

  // function onClickHandler() {
  //   setUsername('John');
  // }

  return (
    <div className="App">
      <h2>{username}</h2>
      {/* <button onClick={onClickHandler}>Click Here</button> */}
      <button onClick={() => setUsername('John')}>Click Here</button>

      <ul>
        {
          users.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
      <button onClick={() => setUsers([...users, 'Tony'])}>Add User</button>

      <Todolist />

      <Footer brandname="StackRoute" user={username} persondetails={person} />
      <button onClick={() => setPerson({ ...person, firstname: 'John' })}>Change Name</button>
    </div>
  );
}

export default App;
