function Footer() {

  return (
    <footer className="bg-black text-white py-12 px-5 border-t border-white/10">

      <div className="max-w-6xl mx-auto text-center">


        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-4">
          AgriAssist 🌱
        </h2>


        <p className="text-gray-400 mb-8">
          AI powered solutions for smarter and modern agriculture.
        </p>



        <div className="flex justify-center gap-8 mb-8">

          <a
            href="#"
            className="text-gray-300 hover:text-green-400 transition"
          >
            GitHub
          </a>


          <a
            href="#"
            className="text-gray-300 hover:text-green-400 transition"
          >
            LinkedIn
          </a>


          <a
            href="#"
            className="text-gray-300 hover:text-green-400 transition"
          >
            Email
          </a>


        </div>



        <p className="text-gray-500 text-sm">
          © 2026 AgriAssist. All rights reserved.
        </p>


      </div>

    </footer>
  );
}

export default Footer;