const LoginLeft = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4  p-4   ">
        <div className="w-20 h-20 bg-gradient-to-br from-gradient-sky via-gradient-violet to-gradient-peach rounded-2xl  flex items-center justify-center shadow-lg transition-transform duration-200 hover:rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="bi bi-airplane rotate-45 w-10 h-10 "
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
          </svg>
        </div>

        <h1 className="p-2 text-center text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-gradient-violet via-gradient-peach to-gradient-sky bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-lg text-light-muted-foreground dark:text-dark-muted-foreground text-center">
          Continue your journey with SkyTrip
        </p>
        <div className="overflow-hidden shadow-xl rounded-2xl w-full max-w-sm h-64 sm:h-72 md:h-80">
          <img
            src="/signup.jpeg"
            alt="Sign Up Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4 w-full flex-wrap justify-center">
          <div className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-gradient-violet shadow-md cursor-pointer transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="text-xl">✈️</div>
              <span className=" text-light-foreground dark:text-dark-muted-foreground font-medium text-sm">
                1000+ Flights
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-gradient-violet shadow-md cursor-pointer transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="text-xl">🌍</div>
              <span className="text-light-foreground dark:text-dark-muted-foreground font-medium text-sm">
                200+ Destinations{" "}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-gradient-violet shadow-md cursor-pointer transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="text-xl">⭐ </div>
              <span className="text-light-foreground dark:text-dark-muted-foreground font-medium text-sm">
                50k+ Reviews{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
