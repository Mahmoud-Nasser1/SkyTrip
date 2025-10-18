import SignUpForm from "./component/SignUpForm";
import SignUpRight from "./component/SignUpRight";

function SignUp() {
  return (
    <div
      className="w-full  min-h-screen p-4
  flex flex-col lg:flex-row justify-evenly items-center gap-2 overflow-hidden"
    >
      <SignUpForm />
      <SignUpRight />
    </div>
  );
}

export default SignUp;
