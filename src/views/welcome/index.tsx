import CustomTab from '../../components/Tabs';
import SigninTab from './tabs/signin';
import SignupTab from './tabs/signup';

const Welcome = () => {
  const handleLogin = () => {
    alert("Logged");
  }
  const handleRegister = () => {
    alert("Registered");
  }

  return (
    <div className="container signin-container">
      <CustomTab tabs={[
        {
          label: "Giriş Yap",
          color: "#8DA642",
          children: <SigninTab />,
          buttonFunc: handleLogin,
        },
        {
          label: "Üye Ol",
          color: "#E42F63",
          children: <SignupTab />,
          buttonFunc: handleRegister,
        }
      ]} />
    </div>
  )
}

export default Welcome;
