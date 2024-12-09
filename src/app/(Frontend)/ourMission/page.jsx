import React from "react";

const DonateNow = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">Donate Now</h1>
          <p className="mt-2 text-lg">
            Your Donation Can Transform Lives and Shape Futures
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-12">
          <p className="text-gray-700 text-lg">
            Imagine a world where every child has the chance to dream, where
            every girl has the opportunity to break free from the chains of
            poverty, and where every woman can step into her power and make her
            voice heard. Sadly, for millions, this world remains a distant
            dream. But with your donation, we can turn this dream into reality.
          </p>

          <h2 className="text-xl font-semibold mt-8 text-blue-600">
            At Bring Smile
          </h2>
          <p className="text-gray-700 mt-4">
            We believe in the power of education and empowerment to shatter
            barriers, uplift communities, and create a future filled with hope.
            Your donation can be the catalyst for a life-changing
            transformation.
          </p>

          {/* Sections */}
          <div className="mt-8 space-y-8">
            {[
              {
                title: "Girl Child Education",
                description:
                  "Every year, millions of girls around the world are denied the right to education. Your donation helps break the chains of poverty and empowers girls to become leaders.",
                impact:
                  "Impact: Your donation changes the trajectory of an entire community.",
              },
              {
                title: "Skill Development for Women",
                description:
                  "Provide training to women to help them lift themselves up, become financially independent, and create futures filled with dignity.",
                impact:
                  "Impact: You help women break cycles of poverty and dependency.",
              },
              {
                title: "Tuition Classes for Quality Education",
                description:
                  "Ensure children from underprivileged communities get academic support to unlock their full potential.",
                impact:
                  "Impact: Transform struggling students into successful learners.",
              },
              {
                title: "Building a School",
                description:
                  "Help create safe spaces for children to thrive, learn, and grow.",
                impact:
                  "Impact: Build a future where dreams take root and futures are shaped.",
              },
              {
                title: "Women Empowerment and Gender Equality",
                description:
                  "Provide women and girls the tools to fight for their rights and rise above societal barriers.",
                impact:
                  "Impact: Empower women and girls to lead, inspire, and create change.",
              },
            ].map((section, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold text-blue-600">
                  {section.title}
                </h3>
                <p className="text-gray-700 mt-2">{section.description}</p>
                <p className="text-gray-600 mt-2 italic">{section.impact}</p>
              </div>
            ))}
          </div>

          {/* Donation Information */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600">
              How Your Donation Helps
            </h2>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li>₹26,000 provides one year of education for a girl.</li>
              <li>₹15,000 supports skill development for women.</li>
              <li>₹5,000 offers academic support and resources for children.</li>
              <li>
                Any donation, no matter the size, makes an immediate and lasting
                impact.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              Your Donation Can Change Everything
            </h2>
            <p className="mt-4 text-gray-700">
              When you donate to Bring Smile, you are not just contributing to a
              cause—you are changing the course of lives.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;