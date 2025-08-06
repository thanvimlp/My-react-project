import React from "react";

const Service = () => {
  return (
    <>
      {/* Services */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl text-center font-semibold mb-8 text-blue-600">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-pink-200">
            <h3 className="text-xl font-bold mb-2 text-pink-600">
              1-on-1 Therapy
            </h3>
            <p>
              Talk to licensed professionals online from the comfort of your
              home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-pink-200">
            <h3 className="text-xl font-bold mb-2 text-pink-600">
              Mindfulness Tools
            </h3>
            <p>
              Access guided meditations, breathing exercises, and journaling
              prompts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-pink-200">
            <h3 className="text-xl font-bold mb-2 text-pink-600">
              Progress Tracking
            </h3>
            <p>
              Track your mood and mental wellbeing over time with interactive
              tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
