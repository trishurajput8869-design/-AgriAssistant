import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 right-10"></div>

      <div className="text-center max-w-4xl relative z-10">

        <p className="text-green-400 text-lg mb-4">
          🚀 AI Powered Agriculture Platform
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-transparent bg-clip-text">
          AgriAssist 🌱
        </h1>

        <p className="text-gray-300 text-xl leading-8 mb-8">
          Empowering farmers with Artificial Intelligence,
          smart crop analysis, weather insights and modern
          farming solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 flex-wrap">

          <button
            onClick={() => navigate("/chat")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg shadow-green-500/30 hover:scale-105 transition-all duration-300"
          >
            🌿 Start AI Chat
          </button>

          <button
            className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            📷 Detect Disease
          </button>

        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-5 text-center">

          <div>
            <h3 className="text-3xl font-bold text-green-400">
              AI
            </h3>
            <p className="text-gray-400">
              Technology
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">
              24/7
            </h3>
            <p className="text-gray-400">
              Assistance
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">
              Smart
            </h3>
            <p className="text-gray-400">
              Farming
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;