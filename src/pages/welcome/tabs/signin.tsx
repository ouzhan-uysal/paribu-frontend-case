import { ChangeEvent, useReducer } from "react";
import CustomButton from "../../../components/custom/Button";
import CustomInput from "../../../components/custom/Input";
import { SigninActions, SigninReducer } from "../../../reducers/signin.reducer";
import { ApiRequest } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SigninTab = () => {
  const { t } = useTranslation();
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
        placeholder={t('email') as string}
        value={state.email}
        onChange={handleChangeEmail}
      />
      <CustomInput
        placeholder={t('password') as string}
        type="password"
        value={state.password}
        onChange={handleChangePassword}
      />
      <CustomButton
        name={t('signin') as string}
        onClick={handleLogin}
        bgColor="#8DA642"
      />
    </div>
  )
}

export default SigninTab;
