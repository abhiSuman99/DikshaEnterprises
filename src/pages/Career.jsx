import React from "react";

function Career() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f3f4f6] text-gray py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At Diksha Enterprises, we believe in empowering individuals to grow,
          innovate, and make a real difference in the world of government solutions.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Why Join Diksha Enterprises?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Meaningful Work</h3>
            <p>
              We serve Panchayati Raj, ULBs, and government institutions, creating
              real impact on society.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Career Growth</h3>
            <p>
              With structured learning and real-time experience, we help you grow
              into a confident leader.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Team Culture</h3>
            <p>
              Collaborate with driven minds in a supportive, ethical, and
              transparent work environment.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-6 md:px-20 bg-[#f7f7f7]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Apply Now
        </h2>
        <form className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Experience (e.g. 3 years)"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Upload Resume (PDF/DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Tell us why you're a good fit..."
            className="border border-gray-300 p-3 rounded w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-[#ea5430] text-white py-3 px-6 rounded font-semibold hover:bg-[#ea5430] transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default Career;
