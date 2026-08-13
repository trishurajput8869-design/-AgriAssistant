import {
  Brain,
  CloudSun,
  Droplets,
  Leaf,
  ScanSearch,
  Sparkles,
  Sprout,
  Wheat,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Brain,
      number: "01",
      title: "AI Farming Assistant",
      description:
        "Ask questions about crops, farming practices and common agricultural problems and get AI-powered guidance.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90",
      badge: "AI Powered",
    },
    {
      icon: ScanSearch,
      number: "02",
      title: "Crop Disease Detection",
      description:
        "Upload crop images and use intelligent visual analysis to identify possible crop health problems.",
      image:
        "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=90",
      badge: "Smart Detection",
    },
    {
      icon: CloudSun,
      number: "03",
      title: "Weather Intelligence",
      description:
        "Understand weather conditions and use timely information to make better farming decisions.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=90",
      badge: "Live Insights",
    },
    {
      icon: Sprout,
      number: "04",
      title: "Crop Insights",
      description:
        "Get useful information around crops, growth and agricultural practices in one place.",
      image:
        "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=90",
      badge: "Crop Intelligence",
    },
    {
      icon: Droplets,
      number: "05",
      title: "Smart Irrigation",
      description:
        "Make more informed irrigation decisions by considering crop and environmental conditions.",
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=90",
      badge: "Smart Water",
    },
    {
      icon: Wheat,
      number: "06",
      title: "Farmer First",
      description:
        "Everything is designed around a simple experience that keeps technology easy to understand.",
      image:
        "https://images.unsplash.com/photo-1592982537447-6f2a6a0a5a2f?auto=format&fit=crop&w=1200&q=90",
      badge: "Made for Farmers",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-[#f7faf7] py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-green-100/60 rounded-full blur-3xl" />

      <div className="absolute bottom-10 left-0 w-64 h-64 bg-lime-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* ================= HEADER ================= */}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-green-100 px-4 py-2 text-sm font-bold text-green-700 shadow-sm mb-5">
              <Sparkles size={15} />
              Powerful Features
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-green-950 leading-[1.05]">
              Everything your
              <span className="text-green-700"> farm needs.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
              One intelligent platform bringing essential agricultural
              tools together in a clean and simple experience.
            </p>
          </div>

          {/* AI Badge */}

          <div className="hidden lg:flex items-center gap-3 bg-white rounded-2xl border border-green-100 px-5 py-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Leaf size={20} className="text-green-700" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Agriculture
              </p>

              <p className="font-extrabold text-green-950">
                Powered by AI
              </p>
            </div>
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative bg-white rounded-[28px] border border-green-100 overflow-hidden shadow-[0_10px_35px_rgba(20,83,45,0.05)] hover:shadow-[0_20px_55px_rgba(20,83,45,0.12)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* ================= IMAGE ================= */}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/15 to-transparent" />

                  {/* Number */}

                  <div className="absolute top-4 right-5 text-sm font-extrabold text-white drop-shadow-lg">
                    {feature.number}
                  </div>

                  {/* Badge */}

                  <div className="absolute bottom-4 left-5">
                    <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-2 text-xs font-extrabold text-green-800 shadow-lg">
                      <Leaf size={13} />
                      {feature.badge}
                    </span>
                  </div>
                </div>

                {/* ================= CARD CONTENT ================= */}

                <div className="p-7 md:p-8">
                  {/* Icon */}

                  <div className="w-12 h-12 -mt-1 mb-5 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                    <Icon
                      size={23}
                      className="text-green-700 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-extrabold text-green-950">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-gray-500 leading-7">
                    {feature.description}
                  </p>

                  {/* Divider */}

                  <div className="mt-6 h-px bg-green-50" />

                  {/* Learn more */}

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-green-700">
                    Learn more

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM FIELD BANNER ================= */}

        <div className="mt-10 relative overflow-hidden rounded-[30px] h-[260px] md:h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=90"
            alt="Agricultural field"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/40 to-transparent" />

          <div className="relative z-10 h-full flex items-center px-7 md:px-12">
            <div className="max-w-xl">
              <p className="text-green-200 font-bold text-sm uppercase tracking-[0.18em]">
                Grow with intelligence
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Better information.
                <br />
                Better farming decisions.
              </h3>

              <p className="mt-4 text-white/70 max-w-lg leading-7">
                AgriAssist brings AI-powered agricultural intelligence
                closer to every farmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;