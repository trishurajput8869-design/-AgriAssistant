import {
  ArrowUpRight,
  Database,
  GitBranch,
  Leaf,
  Server,
  Sparkles,
  TestTube,
} from "lucide-react";

function Team() {
  const members = [
    {
      name: "Aryan",
      role: "Team Lead + Full Stack / Integration",
      secondary: "Frontend + Backend + GitHub",
      icon: GitBranch,
      number: "01",
    },
    {
      name: "Mona",
      role: "ML Engineer",
      secondary: "Dataset + Model + Evaluation",
      icon: Sparkles,
      number: "02",
    },
    {
      name: "Shivani",
      role: "Python + SQL / Database",
      secondary: "Backend + ML Support",
      icon: Database,
      number: "03",
    },
    {
      name: "Namrata",
      role: "Python Developer",
      secondary: "Backend APIs + Testing",
      icon: TestTube,
      number: "04",
    },
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">

          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-bold text-green-700 mb-5">
            <Leaf size={15} />
            Meet the Team
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-green-950 leading-[1.05]">
            The people behind
            <span className="text-green-700"> AgriAssist.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
            Four passionate minds working together across AI, development,
            databases and machine learning to build smarter agriculture.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">

          {/* LEFT FIELD IMAGE */}
          <div className="relative min-h-[520px] lg:min-h-[690px] rounded-[34px] overflow-hidden shadow-[0_20px_60px_rgba(20,83,45,0.12)]">

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=90"
              alt="European agricultural field"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-9">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl">
                  <Leaf
                    size={23}
                    className="text-green-700"
                  />
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                  <span className="text-xs font-extrabold text-green-800">
                    4 Members
                  </span>
                </div>

              </div>

              {/* Bottom */}
              <div className="max-w-md text-white">

                <p className="text-green-200 text-sm font-bold uppercase tracking-[0.18em]">
                  One team. One vision.
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
                  Building smarter
                  <br />
                  agriculture together.
                </h3>

                <p className="mt-4 text-white/75 leading-7">
                  From machine learning and databases to full-stack
                  development, every role contributes to the AgriAssist
                  ecosystem.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT MEMBER CARDS */}
          <div className="grid sm:grid-cols-2 gap-5">

            {members.map((member) => {
              const Icon = member.icon;

              return (
                <div
                  key={member.name}
                  className="group relative bg-[#f8fbf8] border border-green-100 rounded-[30px] p-7 shadow-[0_10px_35px_rgba(20,83,45,0.05)] hover:shadow-[0_25px_55px_rgba(20,83,45,0.13)] hover:-translate-y-1.5 transition-all duration-300"
                >

                  {/* Number */}
                  <div className="absolute top-6 right-6 text-xs font-extrabold text-green-200">
                    {member.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-green-100 flex items-center justify-center shadow-sm group-hover:bg-green-700 transition-colors duration-300">

                    <Icon
                      size={28}
                      className="text-green-700 group-hover:text-white transition-colors duration-300"
                    />

                  </div>

                  {/* Name */}
                  <h3 className="mt-7 text-2xl font-extrabold text-green-950">
                    {member.name}
                  </h3>

                  {/* Main role */}
                  <div className="mt-2">

                    <p className="text-xs uppercase tracking-[0.12em] font-extrabold text-green-700">
                      Main Role
                    </p>

                    <p className="mt-2 text-sm font-bold text-gray-700 leading-6">
                      {member.role}
                    </p>

                  </div>

                  {/* Secondary role */}
                  <div className="mt-6 rounded-2xl bg-white border border-green-100 p-4">

                    <div className="flex items-center gap-2 mb-2">

                      <Server
                        size={15}
                        className="text-green-600"
                      />

                      <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-gray-400">
                        Secondary Role
                      </span>

                    </div>

                    <p className="text-sm font-bold text-green-950 leading-5">
                      {member.secondary}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div className="mt-6 pt-5 border-t border-green-100 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">

                      <span className="w-2 h-2 rounded-full bg-green-500" />

                      Team Member

                    </div>

                    <div className="w-9 h-9 rounded-xl bg-white border border-green-100 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                      <ArrowUpRight size={17} />
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-[30px] bg-[#f5faf5] border border-green-100 px-7 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-green-700 flex items-center justify-center shrink-0">
              <Leaf
                size={22}
                className="text-white"
              />
            </div>

            <div>

              <p className="font-extrabold text-green-950 text-lg">
                AgriAssistant — 4 Member Team
              </p>

              <p className="text-sm text-gray-500 mt-1">
                AI • Machine Learning • Full Stack • Backend
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-green-700">
            <Sparkles size={17} />
            Building the future of farming
          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;