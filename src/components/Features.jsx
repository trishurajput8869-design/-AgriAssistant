function Features() {

  const features = [
    {
      icon: "🌱",
      title: "AI Crop Analysis",
      desc: "Analyze crop health using artificial intelligence and detect problems early."
    },
    {
      icon: "🤖",
      title: "Smart Farming",
      desc: "AI based solutions that help farmers take better farming decisions."
    },
    {
      icon: "🌦️",
      title: "Weather Intelligence",
      desc: "Get smart weather insights to improve crop planning and productivity."
    }
  ];


  return (
    <section className="bg-black text-white py-24 px-5">

      <div className="text-center mb-14">

        <p className="text-green-400 mb-3">
          Powerful Features
        </p>

        <h2 className="text-5xl font-bold">
          What AgriAssist Offers
        </h2>

      </div>


      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">


        {features.map((item,index)=>(

          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:-translate-y-3 hover:border-green-400 transition duration-300"
          >

            <div className="text-5xl mb-6">
              {item.icon}
            </div>


            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>


            <p className="text-gray-400 leading-7">
              {item.desc}
            </p>


          </div>

        ))}


      </div>

    </section>
  );
}

export default Features;