import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateRoom from "./components/CreateRoom";
import Rooms from "./components/Rooms";
import ViewProfile from "./components/ViewProfile";
import store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Room from "./components/Room";
import EditProfile from "./components/EditProfile";
import NotFound from "./components/NotFound";
import PrivateRoutes from "./components/PrivateRoutes";

const queryClient = new QueryClient();
const persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Main />}>
                <Route path='' element={<Rooms />} />
                <Route element={<PrivateRoutes />}>
                  <Route path='view-profile/:email' element={<ViewProfile />} />
                </Route>
              </Route>
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route element={<PrivateRoutes />}>
                <Route path='create-room' element={<CreateRoom />} />
                <Route path='room/:id' element={<Room />} />
                <Route path='edit-profile' element={<EditProfile />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
