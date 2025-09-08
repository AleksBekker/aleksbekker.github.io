import headshot from "../assets/headshot.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-white pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl tracking-tighter md:tracking-normal md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-accent">Aleks</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Backend Developer
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-lg mx-auto md:ml-0">
              I create simple, functional programs with a focus on user
              experience. My work combines usability with thoughtful design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/AleksBekker_Resume.pdf"
                className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Resume
              </a>
              <button
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                My Work
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 justify-center hidden md:flex">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
              <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-red-200"></div>
              <img
                src={headshot}
                loading="lazy"
                className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-red-300 flex items-center justify-center text-white text-5xl font-bold"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce">
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="text-gray-400 hover:text-accent transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
