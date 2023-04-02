import { ChangeEvent, useReducer } from "react";
import CustomButton from "../../../components/custom/Button";
import CustomInput from "../../../components/custom/Input";
import { SigninActions, SigninReducer } from "../../../reducers/signin.reducer";
import { ApiRequest } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SigninTab = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(SigninReducer, {
    email: "",
    password: "",
  })
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SigninActions.SET_EMAIL,
      payload: {
        email: e.target.value
      }
    })
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SigninActions.SET_PASSWORD,
      payload: {
        password: e.target.value
      }
    })
  }

  const handleLogin = async () => {
    await ApiRequest.signin({
      email: state.email,
      password: state.password
    }).then(res => {
      setUser({
        email: res.email,
        fullName: res.fullName,
      })
      navigate('/home');
    }).catch(err => console.error(err));
  }

  return (
    <div className="welcome-container">
      <CustomInput
        placeholder="E-Posta Adresiniz"
        value={state.email}
        onChange={handleChangeEmail}
      />
      <CustomInput
        placeholder="Parolanız"
        type="password"
        value={state.password}
        onChange={handleChangePassword}
      />
      <CustomButton
        name="Giriş Yap"
        onClick={handleLogin}
        bgColor="#8DA642"
      />
    </div>
  )
}

export default SigninTab;
