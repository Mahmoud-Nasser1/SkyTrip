import SignUpForm from "./component/SignUpForm";
import SignUpRight from "./component/SignUpRight";

function SignUp() {
  return (
    <div
      className="w-full p-4 my-6
  flex flex-col lg:flex-row justify-evenly items-center gap-2 overflow-hidden"
    >
      <SignUpForm className="w-full" />
      <SignUpRight className="w-full" />
    </div>
  );
}

export default SignUp;
