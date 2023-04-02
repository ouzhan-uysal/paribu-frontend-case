import CustomButton from "../../../components/custom/Button";
import CustomInput from "../../../components/custom/Input";

const SignupTab = () => {
  const handleRegister = () => {
    alert("Registered");
  }
  return (
    <div className="welcome-container">
      <CustomInput placeholder="Adınız Soyadınız" />
      <CustomInput placeholder="E-Posta Adresiniz" />
      <CustomInput placeholder="Parolanız" />
      <CustomButton name="Üye Ol" onClick={handleRegister} bgColor="#E42F63" />
    </div>
  )
}

export default SignupTab;
