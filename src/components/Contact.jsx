function Contact() {

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-5"
    >

      <div className="text-center mb-14">

        <p className="text-green-400 mb-3">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold">
          Contact Us
        </h2>

      </div>



      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl">


        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-5 p-4 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-green-400"
        />


        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-5 p-4 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-green-400"
        />


        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full mb-5 p-4 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-green-400"
        ></textarea>



        <button
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Send Message 🚀
        </button>


      </div>


    </section>
  );
}

export default Contact;