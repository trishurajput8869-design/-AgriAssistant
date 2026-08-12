import {
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Sprout,
  Tractor,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-bold text-green-700 mb-5">
            <Leaf size={16} />
            About AgriAssist
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-green-950 leading-[1.05]">
            Technology that understands
            <span className="text-green-700"> farming.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
            AgriAssist is built to make modern agricultural intelligence
            simple, accessible and useful for farmers.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-green-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border-8 border-white shadow-[0_25px_70px_rgba(20,83,45,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90"
                alt="European green agricultural field"
                className="w-full h-[430px] md:h-[560px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-green-950/65 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute left-6 bottom-6 right-6">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Sprout
                        size={24}
                        className="text-green-700"
                      />
                    </div>

                    <div>
                      <p className="font-extrabold text-green-950">
                        Smarter Agriculture
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        AI • Data • Farming
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -right-4 md:-right-7 top-12 bg-white rounded-2xl border border-green-100 shadow-xl px-5 py-4">
              <p className="text-xs text-gray-500 font-semibold">
                Built for
              </p>

              <p className="text-xl font-extrabold text-green-800">
                Smart Farmers
              </p>
            </div>

          </div>

          {/* Content */}
          <div>

            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-green-700">
              Our mission
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-green-950 leading-tight">
              Bringing AI closer to every field.
            </h3>

            <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
              Farming decisions often depend on weather, crop health,
              soil conditions and timely information. AgriAssist combines
              these ideas into one simple digital experience.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Instead of making farmers navigate complicated technology,
              our goal is to make intelligent agricultural assistance feel
              natural and easy to use.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-green-700" />
                </div>

                <div>
                  <h4 className="font-bold text-green-950">
                    AI-powered assistance
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Ask farming questions and get useful guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-green-700" />
                </div>

                <div>
                  <h4 className="font-bold text-green-950">
                    Crop-focused insights
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Understand crop problems with simple information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-green-700" />
                </div>

                <div>
                  <h4 className="font-bold text-green-950">
                    Designed for simplicity
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Clean technology made for real-world farming.
                  </p>
                </div>
              </div>

            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-[#f6faf6] border border-green-100 p-5">
                <Tractor
                  size={23}
                  className="text-green-700 mb-4"
                />

                <p className="text-2xl font-extrabold text-green-950">
                  Smart
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Farming Support
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6faf6] border border-green-100 p-5">
                <Leaf
                  size={23}
                  className="text-green-700 mb-4"
                />

                <p className="text-2xl font-extrabold text-green-950">
                  AI
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Agriculture Intelligence
                </p>
              </div>

            </div>

            <button className="mt-8 inline-flex items-center gap-2 text-green-700 font-extrabold hover:gap-3 transition-all">
              Explore AgriAssist
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;