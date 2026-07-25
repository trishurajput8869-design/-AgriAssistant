function FeaturesCard({ icon, title, desc }) {
  return (
    <div
      className="
      group
      bg-[#0b120e]
      p-8
      rounded-3xl
      border
      border-green-900
      hover:border-green-400
      transition-all
      duration-500
      hover:-translate-y-3
      shadow-xl
      "
    >

      <div
        className="
        w-16
        h-16
        flex
        items-center
        justify-center
        text-4xl
        rounded-2xl
        bg-green-500/10
        group-hover:bg-green-500/20
        transition
        "
      >
        {icon}
      </div>


      <h3
        className="
        text-2xl
        font-bold
        text-white
        mt-6
        group-hover:text-green-400
        transition
        "
      >
        {title}
      </h3>


      <p className="
        text-gray-400
        mt-4
        leading-relaxed
      ">
        {desc}
      </p>


      <div className="
        mt-6
        text-green-400
        font-semibold
        opacity-0
        group-hover:opacity-100
        transition
      ">
        Explore →
      </div>


    </div>
  );
}

export default FeaturesCard;