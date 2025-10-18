import LoginForm from "./components/LoginForm";
import LoginLeft from "./components/LoginLeft";

const Login = () => {
  return (
    <div
      className="w-full  min-h-screen p-4
  flex flex-col lg:flex-row justify-evenly items-center gap-2 overflow-hidden"
    >
      <LoginLeft />
      <LoginForm />
    </div>
  );
};

export default Login;
