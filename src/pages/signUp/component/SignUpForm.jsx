import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phoneCheck = /^(?:\+20|0020)?01[0125][0-9]{8}$/;
  const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleValidation = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName:
        user.firstName.length < 3 ||
        user.firstName[0] !== user.firstName[0].toUpperCase() ||
        user.firstName.includes(" ")
          ? "First name must be at least 3 letters, start with a capital letter, and contain no spaces."
          : "",

      lastName:
        user.lastName.length < 3 ||
        user.lastName[0] !== user.lastName[0].toUpperCase() ||
        user.lastName.includes(" ")
          ? "Last name must be at least 3 letters, start with a capital letter, and contain no spaces."
          : "",

      email: !emailCheck.test(user.email)
        ? "Please enter a valid email address."
        : "",
      phoneNumber: !phoneCheck.test(user.phoneNumber)
        ? "Please enter a valid phone number."
        : "",
      password: !passwordCheck.test(user.password)
        ? "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
        : "",
      confirmPassword:
        user.confirmPassword !== user.password ? "Passwords do not match." : "",
    };

    setError(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      setSuccess(true);

      //   const dbUser = {
      //     firstName: user.firstName,
      //     lastName: user.lastName,
      //     email: user.email,
      //     phoneNumber: user.phoneNumber,
      //     password: user.password,
      //   };
      //    fetch("", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(dataToSend),
      // })
      //   .then((res) => res.json())
      //   .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div
        className="dark:bg-dark-card rounded-3xl shadow-2xl p-7 my-8 hover:shadow-2xl hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-300"
      >
        <Card color="transparent" shadow={false}>
          <h1 className="text-4xl  bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
            Create Account
          </h1>
          <Typography className="mt-1 font-normal text-xl text-light-muted-foreground dark:text-dark-muted-foreground">
            Join us and start your travel adventure
          </Typography>
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
            onSubmit={handleValidation}
          >
            <div className=" flex flex-col gap-2 mb-4 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                First Name
              </Typography>
              <UserIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type="text"
                placeholder="First Name"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.firstName
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              {error.firstName && (
                <p className="text-red-500 text-sm mt-1">{error.firstName}</p>
              )}
            </div>
            <div className=" flex flex-col gap-2 mb-4 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                Last Name
              </Typography>
              <UserIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type="text"
                placeholder="Last Name"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.lastName
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              {error.lastName && (
                <p className="text-red-500 text-sm mt-1">{error.lastName}</p>
              )}
            </div>
            <div className=" flex flex-col gap-2 mb-4 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                Email Address
              </Typography>
              <EnvelopeIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type="text"
                placeholder="name@gmail.com"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.email
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>
            <div className="mb-4 flex flex-col gap-2 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                Phone Number
              </Typography>
              <PhoneIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type="tel"
                placeholder="Enter your phone number"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.phoneNumber
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="tel"
                value={user.phoneNumber}
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
              />
              {error.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{error.phoneNumber}</p>
              )}
            </div>{" "}
            <div className="mb-4 flex flex-col gap-2 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                Password
              </Typography>
              <LockClosedIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.password
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="new-password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
              <span
                className="absolute right-4 top-12 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </span>
            </div>
            <div className="mb-4 flex flex-col gap-2 relative group">
              <Typography className="ml-2  text-light-muted-foreground dark:text-dark-muted-foreground">
                Confirm Password
              </Typography>
              <LockClosedIcon className="absolute left-4 top-12 w-5 h-5 text-light-muted-foreground dark:text-dark-muted-foreground group-focus-within:text-gradient-violet duration-200" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2
    ${
      error.confirmPassword
        ? "border-light-destructive"
        : "border-gray-200 dark:border-dark-accent"
    }
   focus:border-gradient-violet outline-none dark:focus:border-gradient-violet bg-white dark:bg-dark-popover 
           transition-colors text-light-muted-foreground dark:text-dark-muted-foreground placeholder-gray-400"
            `}
                autoComplete="new-password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
              {error.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {error.confirmPassword}
                </p>
              )}
              <span
                className="absolute right-4 top-12 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeSlashIcon className="w-5 h-5" />
                )}
              </span>
            </div>
            <Checkbox
              className="checked:bg-gradient-violet checked:border-gradient-violet checked:before:bg-gradient-violet"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex flex-wrap items-center  font-semibold  text-base  text-light-muted-foreground dark:text-dark-muted-foreground"
                >
                  I agree the
                  <Typography
                    as={Link}
                    className=" transition-colors font-semibold text-gradient-violet hover:underline"
                  >
                    &nbsp;Terms and Conditions
                  </Typography>
                </Typography>
              }
              containerProps={{
                className: "-ml-2.5 rounded",
              }}
            />
            <Button
              className="mt-6 rounded-full  bg-gradient-to-br from-gradient-violet to-gradient-peach p-5 
transition-transform duration-300 hover:scale-105"
              fullWidth
              type="submit"
            >
              Create Account
            </Button>
            <p className="text-center my-3   text-light-muted-foreground dark:text-dark-muted-foreground">
              Or sign up with
            </p>
            <div className="flex flex-wrap gap-5 justify-center ">
              <Button
                variant="outlined"
                className="px-9 group border-2 border-gray-400 hover:border-gradient-violet transition-transform duration-200 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-facebook fill-current  text-light-muted-foreground dark:text-dark-muted-foreground group-hover:text-gradient-violet transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Button>
              <Button
                variant="outlined"
                className="px-9 group border-2  border-gray-400 hover:border-gradient-violet transition-transform duration-200 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-facebook fill-current text-light-muted-foreground dark:text-dark-muted-foreground group-hover:text-gradient-violet transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                  />
                </svg>
              </Button>
              <Button
                variant="outlined"
                className="px-9 group border-2 border-gray-400 hover:border-gradient-violet transition-transform duration-200 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-facebook fill-current text-light-muted-foreground dark:text-dark-muted-foreground group-hover:text-gradient-violet transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                </svg>
              </Button>
            </div>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal  text-light-muted-foreground dark:text-dark-muted-foreground"
            >
              Already have an account?{" "}
              <span className="font-semibold text-gradient-violet hover:underline">
                <Link to="/login">Sign In</Link>
              </span>
            </Typography>
          </form>
        </Card>
      </div>
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setSuccess(false)}
            >
              ✖
            </button>
            <div className="text-center">
              <Typography color="green" variant="h5" className="mb-4">
                ✔️ Account Created!
              </Typography>
              <Typography className="text-light-muted-foreground dark:text-dark-muted-foreground mb-6">
                Your account was successfully created.
              </Typography>
              <Button
                className="bg-gradient-to-br from-gradient-violet to-gradient-peach rounded-full px-6 py-3"
                onClick={() => navigate("/login")}
              >
                Go to Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
