import AppContext from "./AppContext";
import Comp1 from "./Comp1";
import { useReducer, useState } from "react";
import reducer, { initialState } from './Reducer';
import ListUsers from "./ListUsers";
import TableUser from "./TableUser";
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [view, setView] = useState('list');
  return (
    <div className="container">
      {/* <AppContext.Provider value={{ state, dispatch }}>
        <Comp1 />
      </AppContext.Provider> */}
      <i class="fa-solid fa-list fa-2x me-5" onClick={() => setView('list')}></i>
      <i class="fa-solid fa-table fa-2x" onClick={() => setView('table')}></i>
      {
        view == 'table' ? <TableUser /> : <ListUsers />
      }
    </div>
  );
}

export default App;
