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
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-green-400 text-lg mb-2">
            The People Behind
          </p>

          <h2 className="text-5xl font-bold">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((person, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center hover:border-green-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="text-6xl mb-5">
                {person.emoji}
              </div>

              <h3 className="text-2xl font-bold">
                {person.name}
              </h3>

              <p className="text-green-400 mt-2 font-medium">
                {person.role}
              </p>

              <p className="text-gray-400 text-sm mt-4 leading-6">
                {person.desc}
              </p>

              <button className="mt-6 px-5 py-2 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition">
                View Profile
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;