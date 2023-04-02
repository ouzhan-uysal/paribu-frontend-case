import { ChangeEvent, useReducer } from "react";
import { ApiRequest } from "../../../api";
import CustomButton from "../../../components/custom/Button";
import CustomInput from "../../../components/custom/Input";
import { SignupActions, SignupReducer } from "../../../reducers/signup.reducer";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignupTab = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(SignupReducer, {
    email: "",
    password: "",
    fullName: "",
  })
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignupActions.SET_EMAIL,
      payload: {
        email: e.target.value
      }
    })
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignupActions.SET_PASSWORD,
      payload: {
        password: e.target.value
      }
    })
  }
  const handleChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SignupActions.SET_FULLNAME,
      payload: {
        fullName: e.target.value
      }
    })
  }

  const handleRegister = async () => {
    await ApiRequest.signup({
      fullName: state.fullName,
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
        placeholder="Adınız Soyadınız"
        value={state.fullName}
        onChange={handleChangeFullName}
      />
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
      <CustomButton name="Üye Ol" onClick={handleRegister} bgColor="#E42F63" />
    </div>
  )
}

export default SignupTab;
