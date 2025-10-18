import LoginForm from "./components/LoginForm";
import LoginLeft from "./components/LoginLeft";

const Login = () => {
  return (
    <div className="w-full my-6 p-4 flex flex-col lg:flex-row justify-evenly items-center gap-2 overflow-hidden">
      <LoginLeft className="w-full" />
      <LoginForm className="w-full" />
    </div>
  );
};

export default Login;
