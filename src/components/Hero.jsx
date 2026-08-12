import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Leaf,
  Sparkles,
} from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7faf7] pt-28"
    >

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
          alt="Green agricultural field"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/35" />

      </div>

      {/* Decorative blobs */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-green-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-lime-200/40 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center min-h-[calc(100vh-120px)]">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 rounded-full px-4 py-2 mb-6 shadow-sm">

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white">
                <Sparkles size={13} />
              </span>

              <span className="text-sm font-bold">
                AI-Powered Agriculture Platform
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] leading-[0.98] font-extrabold tracking-[-0.045em] text-green-950">

              Smarter farming.

              <br />

              <span className="text-green-700">
                Better harvests.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg md:text-xl leading-8 text-gray-600">
              AgriAssist brings AI-powered crop insights, disease detection,
              weather intelligence and farming guidance together in one simple
              platform.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/chat")}
                className="group flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-7 py-4 rounded-2xl font-bold shadow-xl shadow-green-700/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Leaf size={19} />

                Start AI Chat

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                className="flex items-center gap-3 bg-white/90 hover:bg-white border border-green-200 text-green-900 px-7 py-4 rounded-2xl font-bold shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1"
              >
                <Camera size={19} className="text-green-700" />

                Detect Crop Disease
              </button>

            </div>

            {/* Trust */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-green-600" />
                AI assistance
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-green-600" />
                Smart crop insights
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={17} className="text-green-600" />
                Farmer friendly
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative hidden md:block">

            {/* Main image card */}
            <div className="relative rounded-[32px] overflow-hidden border-[10px] border-white shadow-2xl shadow-green-950/15">

              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=85"
                alt="Modern farm field"
                className="w-full h-[520px] object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/65 via-transparent to-transparent" />

              {/* Bottom card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                      <Leaf
                        size={21}
                        className="text-green-700"
                      />
                    </div>

                    <div>
                      <p className="font-extrabold text-green-950">
                        Smart Agriculture
                      </p>

                      <p className="text-xs text-gray-500 mt-0.5">
                        Powered by Artificial Intelligence
                      </p>
                    </div>

                  </div>

                  <div className="hidden lg:block text-right">
                    <p className="text-xs text-gray-500">
                      Assistance
                    </p>

                    <p className="font-extrabold text-green-700">
                      24 / 7
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating stat */}
            <div className="absolute -left-8 top-16 bg-white rounded-2xl px-5 py-4 shadow-xl border border-green-100">

              <p className="text-xs text-gray-500 font-semibold">
                AI Assistance
              </p>

              <p className="text-2xl font-extrabold text-green-800">
                24/7
              </p>

            </div>

            {/* Floating crop card */}
            <div className="absolute -right-7 bottom-24 bg-green-900 text-white rounded-2xl px-5 py-4 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-xs text-green-200">
                    Smart Insights
                  </p>

                  <p className="font-bold">
                    Grow Smarter 🌱
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7faf7] to-transparent" />

    </section>
  );
}

export default Hero;