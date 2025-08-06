import React from "react";
import Card from "../src/components/Card";
import medImg from "../src/assets/images/meditation.jpg";
import yogaImg from "../src/assets/images/yoga.jpg";
import theraImg from "../src/assets/images/therapy.jpg";
import jourImg from "../src/assets/images/journaling.jpg";
import soundTheraImg from "../src/assets/images/sound_therapy.jpg";
import natureWalkImg from "../src/assets/images/nature_walk.jpg";
const ExplorePage = () => {
  const mentalHealthTools = [
    {
      title: "Meditation",
      description: "Find your calm through guided breathing and mindfulness.",
      image: medImg,
    },
    {
      title: "Yoga",
      description: "Connect body and mind with gentle yoga sessions.",
      image: yogaImg,
    },
    {
      title: "Therapy",
      description: "Talk it out with expert therapists at your own pace.",
      image: theraImg,
    },
    {
      title: "Journaling",
      description: "Track emotions and reflect daily to boost mental clarity.",
      image: jourImg,
    },
    {
      title: "Sound Therapy",
      description: "Relax with soothing audio sessions and frequencies.",
      image: soundTheraImg,
    },
    {
      title: "Nature Walks",
      description: "Discover the benefits of mindful outdoor experiences.",
      image: natureWalkImg,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Explore Your Wellness Tools
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Choose what suits you best for your mental well-being journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card tool */}
          {mentalHealthTools.map((tool, index) => (
            <Card
              key={index}
              title={tool.title}
              description={tool.description}
              image={tool.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
