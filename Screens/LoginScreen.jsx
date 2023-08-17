import FormAuth from "./Component/FormAuth";

export default function LoginScreen({ title, login, btn1, btn2 }) {
  // console.log(Platform.OS);
  return (
    <FormAuth title={title} btn1={btn1} btn2={btn2} login={login} />
  );
}
