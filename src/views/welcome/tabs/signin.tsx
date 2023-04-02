import CustomButton from "../../../components/custom/Button";
import CustomInput from "../../../components/custom/Input";

const SigninTab = () => {
  const handleLogin = () => {
    alert("Logged");
  }
  return (
    <div className="welcome-container">
      <CustomInput placeholder="E-Posta Adresiniz" />
      <CustomInput placeholder="Parolanız" />
      <CustomButton name="Giriş Yap" onClick={handleLogin} bgColor="#8DA642" />
    </div>
  )
}

export default SigninTab;
