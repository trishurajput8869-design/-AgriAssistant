function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl text-white px-8 py-4 flex justify-between items-center z-50 border-b border-white/10">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        AgriAssist 🌱
      </h1>


      <div className="flex gap-8">

        <a
          href="#home"
          className="hover:text-green-400 transition duration-300"
        >
          Home
        </a>


        <a
          href="#about"
          className="hover:text-green-400 transition duration-300"
        >
          About
        </a>


        <a
          href="#projects"
          className="hover:text-green-400 transition duration-300"
        >
          Projects
        </a>


        <a
          href="#contact"
          className="hover:text-green-400 transition duration-300"
        >
          Contact
        </a>


      </div>

    </nav>
  );
}

export default Navbar;