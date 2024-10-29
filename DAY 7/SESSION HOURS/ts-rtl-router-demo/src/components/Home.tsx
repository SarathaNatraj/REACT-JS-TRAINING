import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("/about")}>See the about page</button>
    </>
  );
};
