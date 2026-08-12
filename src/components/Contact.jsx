import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#f7faf7] py-24 md:py-32 overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-green-100 px-4 py-2 text-sm font-bold text-green-700 shadow-sm mb-5">
            <MessageCircle size={16} />
            Get in touch
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-green-950 leading-[1.05]">
            Let's grow
            <span className="text-green-700"> together.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">
            Have a question, idea or feedback about AgriAssist?
            We'd love to hear from you.
          </p>

        </div>

        {/* Main card */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] overflow-hidden rounded-[34px] bg-white border border-green-100 shadow-[0_20px_70px_rgba(20,83,45,0.09)]">

          {/* Image side */}
          <div className="relative min-h-[480px] lg:min-h-[650px]">

            <img
              src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1300&q=90"
              alt="Beautiful agricultural landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/15 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-10">

              {/* Top */}
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/95 flex items-center justify-center">
                  <Leaf size={23} className="text-green-700" />
                </div>
              </div>

              {/* Bottom */}
              <div className="text-white max-w-sm">

                <p className="text-green-200 font-bold text-sm uppercase tracking-[0.16em]">
                  AgriAssist
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
                  Better technology
                  <br />
                  for better fields.
                </h3>

                <p className="mt-4 text-white/75 leading-7">
                  Building simple and intelligent experiences for
                  modern agriculture.
                </p>

              </div>

            </div>

          </div>

          {/* Form side */}
          <div className="p-7 md:p-10 lg:p-14">

            <div className="mb-9">
              <h3 className="text-2xl md:text-3xl font-extrabold text-green-950">
                Send us a message
              </h3>

              <p className="text-gray-500 mt-2">
                We'll get back to you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-green-950 mb-2">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-13 rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 text-gray-800 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-green-950 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-13 rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 text-gray-800 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-green-950 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full h-13 rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 text-gray-800 outline-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-green-950 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-200 bg-[#fbfdfb] px-4 py-3 text-gray-800 outline-none resize-none transition-all focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-extrabold shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-green-100">

              <p className="text-xs uppercase tracking-[0.16em] text-gray-400 font-bold mb-5">
                Contact information
              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Mail size={18} className="text-green-700" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Email
                    </p>

                    <p className="text-sm font-bold text-green-950">
                      hello@agriassist.ai
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Phone size={18} className="text-green-700" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Support
                    </p>

                    <p className="text-sm font-bold text-green-950">
                      AI Assistance
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Trust */}
            <div className="mt-7 flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={17} className="text-green-600" />
              Your message is handled with care.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;