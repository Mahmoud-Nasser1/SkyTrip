import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!loginData.email) newErrors.email = "Email is required.";
    if (!loginData.password) newErrors.password = "Password is required.";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/");
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  return (
    <div>
      <div
        className=" rounded-3xl shadow-2xl p-7 hover:shadow-2xl hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-300"
      >
        <Card color="transparent" shadow={false}>
          <h1 className="text-4xl bg-gradient-to-r from-gradient-violet via-gradient-peach to-gradient-sky bg-clip-text text-transparent">
            Sign In
          </h1>
          <Typography className="mt-1 font-normal text-xl text-light-muted-foreground dark:text-dark-foreground">
            Enter your credentials to access your account
          </Typography>
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
            onSubmit={handleLogin}
          >
            <div className=" flex flex-col gap-2 mb-4 relative group">
              <Typography className="ml-2 text-light-muted-foreground dark:text-dark-foreground">
                Email Address
              </Typography>
              <EnvelopeIcon className="absolute left-4 top-12 w-5 h-5 text-gray-600 group-focus-within:text-gradient-violet duration-200" />

              <input
                type="text"
                placeholder="name@gmail.com"
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 
           focus:border-gradient-violet outline-none bg-white dark:bg-gray-800 
           transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                autoComplete="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>
            <div className="mb-4 flex flex-col gap-2 relative group">
              <Typography className="ml-2 text-light-muted-foreground dark:text-dark-foreground">
                Password
              </Typography>
              <LockClosedIcon className="absolute left-4 top-12 w-5 h-5 text-gray-600 group-focus-within:text-gradient-violet duration-200" />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 
           focus:border-gradient-violet outline-none bg-white dark:bg-gray-800 
           transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                autoComplete="new-password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-4 flex-wrap">
              <Checkbox
                className="checked:bg-gradient-violet checked:border-gradient-violet checked:before:bg-gradient-violet"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex flex-wrap items-center  text-base text-light-muted-foreground dark:text-dark-foreground"
                  >
                    Remember me
                  </Typography>
                }
                containerProps={{
                  className: "-ml-2.5 rounded",
                }}
              />
              <Typography className=" transition-colors  text-gradient-violet hover:underline flex justify-center items-center">
                Forget Password?
              </Typography>
            </div>

            <Button
              className="text-base mt-6 rounded-full  bg-gradient-to-r from-gradient-violet to-gradient-peach p-5 
transition-transform duration-300 hover:scale-105"
              fullWidth
              type="submit"
            >
              Sign IN
            </Button>
            <p className="text-center my-3  text-light-muted-foreground dark:text-dark-foreground">
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
                  className="bi bi-facebook fill-current text-gray-800 group-hover:text-gradient-violet transition-colors duration-200"
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
                  className="bi bi-facebook fill-current text-gray-800 group-hover:text-gradient-violet transition-colors duration-200"
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
                  className="bi bi-facebook  fill-current text-gray-800 group-hover:text-gradient-violet transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                </svg>
              </Button>
            </div>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?
              <span className="font-semibold text-gradient-violet hover:underline">
                <Link to="/signup">Sign Up now</Link>
              </span>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
