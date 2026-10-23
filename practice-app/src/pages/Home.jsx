import { useNavigate } from "react-router-dom";
import Button1 from "../components/Button1";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to MyWebsite
      </h1>

      <p className="text-gray-600 mb-6">
        Learn React by building reusable components.
      </p>

      <Button1
        text="Explore Services"
        onClick={() => navigate("/services")}
      />
    </div>
  );
}

export default Home;