import LoginForm from "./components/LoginForm";
import LoginLeft from "./components/LoginLeft";

const Login = () => {
  return (
    <div className="w-full  p-4 pt-24 flex flex-col lg:flex-row justify-evenly items-center gap-2 overflow-hidden bg-light-background dark:bg-dark-background">
      <LoginLeft className="w-full" />
      <LoginForm className="w-full" />
    </div>
  );
};

export default Login;
