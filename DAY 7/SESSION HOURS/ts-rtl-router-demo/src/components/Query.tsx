import { useNavigate, useLocation } from "react-router-dom";

export const Query = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  return (
    <>
      <h1>Component with Query Params</h1>
      <p>ID: {id}</p>
      <button onClick={() => navigate("/home")}>Back to Home</button>
    </>
  );
};
