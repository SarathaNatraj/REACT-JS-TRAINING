import { useState, useReducer } from "react";
import ComponentA from "./ComponentA";
// import { ContextProvider } from "./AppContext";
import AppContext from "./AppContext";
import reducer, { initialState } from "./Reducer";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import UserList from "./UserList";
import UserTable from "./UserTable";
function App() {
  // const [person, setPerson] = useState({name: 'John', age: 25})
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {/* <ContextProvider value="Dhiraj">
        <ComponentA />
      </ContextProvider> */}
      {/* <AppContext.Provider value={person}>
        <ComponentA />
      </AppContext.Provider> */}
      {/* <AppContext.Provider value={{ state, dispatch }}>
        <Comp1 />
        <Comp2 />
      </AppContext.Provider> */}
      <UserList />
      <UserTable />
    </div>
  );
}

export default App;
