import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="home-container">
      <div className="text-container">
        <h2>User: {user?.fullName}</h2>
        <h4>User: {user?.email}</h4>
      </div>
      <div className="button-container"></div>
    </div>
  )
}

export default Home;
