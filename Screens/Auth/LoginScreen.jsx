import FormAuth from "../../Component/FormAuth";

export default function LoginScreen({ navigation }) {
  // console.log(Platform.OS);
  return (
    <FormAuth
      title="Увійти"
      btn1="Увійти"
      btn2="Немає акаунту? "
      btn3="Зареєструватися"
      login={false}
      navTo="Register"
      navigation={navigation}
    />
  );
}
