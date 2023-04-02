import CustomTab from '../../components/Tabs';
import SigninTab from './tabs/signin';
import SignupTab from './tabs/signup';

const Welcome = () => {

  return (
    <div className="container signin-container">
      <CustomTab tabs={[
        {
          label: "Giriş Yap",
          color: "#8DA642",
          children: <SigninTab />,
        },
        {
          label: "Üye Ol",
          color: "#E42F63",
          children: <SignupTab />,
        }
      ]} />
    </div>
  )
}

export default Welcome;
