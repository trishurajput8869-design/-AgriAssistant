import {
  ArrowUpRight,
  Camera,
  CloudSun,
  Leaf,
  MessageCircle,
  Sprout,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "AI Farm Assistant",
      category: "AI Assistant",
      description:
        "A conversational AI experience designed to help farmers get quick answers to agricultural questions.",
      image:
        "https://images.unsplash.com/photo-1592982537447-6f2a6a0a8b1f?auto=format&fit=crop&w=1200&q=90",
      icon: MessageCircle,
    },
    {
      title: "Crop Health Vision",
      category: "Computer Vision",
      description:
        "An image-based agriculture tool that explores crop health and possible disease detection.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=90",
      icon: Camera,
    },
    {
      title: "Smart Weather",
      category: "Weather Intelligence",
      description:
        "A simple weather-focused experience helping farmers understand conditions around their crops.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
      icon: CloudSun,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-14">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-bold text-green-700 mb-5">
              <Sprout size={16} />
              Our Projects
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-green-950 leading-[1.05]">
              Building the future of
              <span className="text-green-700"> farming.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
              Explore the technology experiences behind AgriAssist and
              our vision for smarter agriculture.
            </p>

          </div>

          <div className="flex items-center gap-3 text-sm font-bold text-green-700">
            <Leaf size={18} />
            AI for Agriculture
          </div>

        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-6">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group rounded-[30px] overflow-hidden border border-green-100 bg-white shadow-[0_10px_40px_rgba(20,83,45,0.06)] hover:shadow-[0_25px_60px_rgba(20,83,45,0.13)] hover:-translate-y-1.5 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-[270px] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/65 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-2 text-xs font-extrabold text-green-800 shadow-lg">
                      <Icon size={14} />
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-5 bottom-5 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-green-700 transition-colors duration-300">
                    <ArrowUpRight
                      size={19}
                      className="text-green-800 group-hover:text-white transition-colors"
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-extrabold text-green-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-extrabold text-green-700">
                    Explore project
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-[30px] bg-[#f5faf5] border border-green-100 p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-7">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-green-700 flex items-center justify-center shrink-0">
              <Leaf size={25} className="text-white" />
            </div>

            <div>
              <h3 className="font-extrabold text-green-950 text-xl">
                Agriculture meets technology.
              </h3>

              <p className="text-gray-500 mt-1">
                One platform. Smarter farming.
              </p>
            </div>

          </div>

          <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-green-700/15">
            View all projects
            <ArrowUpRight size={17} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Projects;