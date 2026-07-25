function Projects() {

  const projects = [
    {
      number: "01",
      title: "AI Crop Disease Detection",
      tech: ["Python", "ML", "Computer Vision"],
      desc: "An AI system that detects crop diseases from images and helps farmers take early action."
    },
    {
      number: "02",
      title: "Smart Farming Assistant",
      tech: ["LLM", "AI Agent", "FastAPI"],
      desc: "An intelligent farming assistant that provides AI based recommendations to farmers."
    },
    {
      number: "03",
      title: "Weather Prediction System",
      tech: ["Python", "Data Science", "ML"],
      desc: "A machine learning system that predicts weather patterns for better farming decisions."
    }
  ];


  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-5"
    >

      <div className="text-center mb-14">

        <p className="text-green-400 mb-3">
          Our Work
        </p>

        <h2 className="text-5xl font-bold">
          Featured Projects
        </h2>

      </div>


      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">


        {projects.map((project,index)=>(

          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:-translate-y-3 transition duration-300"
          >

            <p className="text-green-400 text-xl font-bold mb-5">
              {project.number}
            </p>


            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>


            <p className="text-gray-400 mb-6 leading-7">
              {project.desc}
            </p>


            <div className="flex flex-wrap gap-2">

              {project.tech.map((item,i)=>(

                <span
                  key={i}
                  className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>

              ))}

            </div>


          </div>

        ))}


      </div>

    </section>
  );
}

export default Projects;