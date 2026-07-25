function Team() {

  const team = [
    {
      name: "Aryan",
      role: "AI Developer",
      emoji: "👨‍💻",
      desc: "Building AI solutions and intelligent systems."
    },
    {
      name: "Member 2",
      role: "ML Engineer",
      emoji: "🤖",
      desc: "Working on machine learning models."
    },
    {
      name: "Member 3",
      role: "Frontend Developer",
      emoji: "🎨",
      desc: "Creating modern user interfaces."
    },
    {
      name: "Member 4",
      role: "Backend Developer",
      emoji: "⚙️",
      desc: "Managing APIs and backend systems."
    }
  ];


  return (
    <section className="bg-black text-white py-24 px-5">


      <div className="text-center mb-14">

        <p className="text-green-400 mb-3">
          The People Behind
        </p>

        <h2 className="text-5xl font-bold">
          Our Team
        </h2>

      </div>



      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">


        {team.map((person,index)=>(

          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:-translate-y-3 transition duration-300"
          >


            <div className="text-6xl mb-6">
              {person.emoji}
            </div>


            <h3 className="text-2xl font-bold">
              {person.name}
            </h3>


            <p className="text-green-400 mt-2">
              {person.role}
            </p>


            <p className="text-gray-400 mt-4 text-sm leading-6">
              {person.desc}
            </p>


            <button className="mt-6 border border-green-500 text-green-400 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
              View Profile
            </button>


          </div>

        ))}


      </div>


    </section>
  );
}

export default Team;