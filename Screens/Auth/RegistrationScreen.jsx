import FormAuth from "../../Component/FormAuth";

export default function RegistrationScreen({ navigation }) {
  // console.log(Platform.OS);
  return (
    <FormAuth
      title="Реєстрація"
      btn1="Зареєстуватися"
      btn2="Вже є акаунт? "
      btn3="Увійти"
      login={true}
      navTo="Login"
      navigation={navigation}
    />
  );
}
