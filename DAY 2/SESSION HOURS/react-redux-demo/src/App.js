import Header from "./Header/Header"
import AddItem from "./AddItem/AddItem"
import TodoList from "./TodoList/TodoList";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <AddItem />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <TodoList />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
