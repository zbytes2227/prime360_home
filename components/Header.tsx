import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Backglass + Morphs */}
      <div className="absolute inset-0 h-full w-full z-[-1] pointer-events-none">
        {/* Left Blue morph */}
        <div className="absolute -left-8 -top-8 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400/40 to-blue-200/10 blur-2xl" />
        {/* Right Green morph */}
        <div className="absolute -right-8 -bottom-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-green-400/30 to-green-200/5 blur-2xl" />
      </div>
      {/* Main header */}
      <nav
        className="relative flex items-center justify-between px-4 sm:px-10 py-2 md:py-4
          bg-white/60 backdrop-blur-md border-b border-white/30 shadow-lg
          rounded-b-3xl mx-auto max-w-6xl 
          transition-all duration-300"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31,38,135,0.07), 0 2px 8px rgba(61,110,169,0.10)"
        }}
      >
        <div className="flex items-center space-x-2">
          <Image
            src="/prime360.png" // Update path as needed
            alt="Prime360 CRM Logo"
            width={50}
            height={40}
            className="mr-3 rounded-xl shadow-sm bg-white/60"
            priority
          />
          <span className="hidden sm:inline-block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-emerald-500 tracking-tight select-none">
            Prime360 CRM
          </span>
        </div>

        <a
          href="https://calendly.com/hrbharatgen/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-full
              bg-gradient-to-r from-blue-600 via-emerald-500 to-green-500 
              text-white font-semibold text-sm md:text-base
              shadow-lg hover:shadow-xl hover:scale-105 
              transition-all duration-200 backdrop-blur-md border border-white/30"
          >
            <svg
              width={18} height={18}
              viewBox="0 0 20 20"
              fill="none"
              className="mr-2"
              aria-hidden="true"
            >
              <path
                d="M5 10.5L8.5 14L15 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Get Started
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
