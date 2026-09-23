function Contact({ triggerModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    triggerModal(
      "Message Sent",
      "Thank you for contacting PIDO Ethiopia. Your message has been submitted successfully."
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Contact PIDO
          </h2>

          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="mt-4 max-w-2xl text-gray-600 leading-7">
            Have a question, partnership opportunity, or need more information
            about our programs? We would be happy to hear from you.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= FORM ================= */}
          <div className="bg-gray-50/70 rounded-2xl border border-gray-100 p-6 md:p-7">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                ✉
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  We welcome your questions and feedback.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Full Name */}
              <div>
                <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="
                    w-full
                    border border-gray-200
                    bg-white
                    rounded-xl
                    px-4 py-3
                    text-sm text-slate-900
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/30
                    focus:border-emerald-500
                    transition-all duration-300
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="
                    w-full
                    border border-gray-200
                    bg-white
                    rounded-xl
                    px-4 py-3
                    text-sm text-slate-900
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/30
                    focus:border-emerald-500
                    transition-all duration-300
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  className="
                    w-full
                    border border-gray-200
                    bg-white
                    rounded-xl
                    px-4 py-3
                    text-sm text-slate-900
                    placeholder:text-gray-400
                    resize-none
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/30
                    focus:border-emerald-500
                    transition-all duration-300
                  "
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  bg-emerald-600
                  text-white
                  py-3
                  rounded-xl
                  font-bold
                  shadow-sm
                  hover:bg-emerald-700
                  hover:shadow-lg
                  hover:shadow-emerald-200
                  hover:-translate-y-0.5
                  transition-all duration-300
                  flex items-center justify-center gap-2
                "
              >
                Send Message
                <span className="transition-transform duration-300">
                  →
                </span>
              </button>

            </form>
          </div>


          {/* ================= CONTACT DETAILS ================= */}
          <div className="space-y-5">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                ☎
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Contact Information
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Connect with the PIDO team.
                </p>
              </div>
            </div>


            {/* Head Office */}
            <div className="group p-5 bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-100 border-l-4 border-emerald-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  ⌂
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Head Office
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>


            {/* Tigray Hub */}
            <div className="group p-5 bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-100 border-l-4 border-amber-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  ⌖
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Tigray Field Operations Hub
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Mekelle, Tigray, Ethiopia
                  </p>
                </div>
              </div>
            </div>


            {/* Email */}
            <div className="group p-5 bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-100 border-l-4 border-emerald-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  ✉
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Email
                  </h4>

                  <a
                    href="mailto:berhanehad@gmail.com"
                    className="text-sm text-emerald-600 hover:text-emerald-800 hover:underline mt-1 inline-block"
                  >
                    berhanehad@gmail.com
                  </a>
                </div>
              </div>
            </div>


            {/* Phone */}
            <div className="group p-5 bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-100 border-l-4 border-amber-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  ☎
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Phone
                  </h4>

                  <a
                    href="tel:+251914832426"
                    className="text-sm text-amber-600 hover:text-amber-800 hover:underline mt-1 inline-block"
                  >
                    +251 914 83 24 26
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom trust message */}
        <div className="relative mt-8 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center">
          <p className="text-sm text-gray-600 leading-6">
            <span className="font-bold text-emerald-700">
              We value your voice.
            </span>{" "}
            Your questions, ideas, and feedback help us strengthen our work
            with communities and partners.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;