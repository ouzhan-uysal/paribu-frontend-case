import { useNavigate } from "react-router-dom";
import CustomButton from "../components/custom/Button";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { user, setUser } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  }

  return (
    <div className="home-container">
      <div className="text-container">
        <h2>{t('user')}: {user?.fullName}</h2>
        <h4>{t('email')}: {user?.email}</h4>
        <CustomButton bgColor="darkgreen" name="LOGOUT" type="button" onClick={handleLogout} />
      </div>
    </div>
  )
}

export default Home;
