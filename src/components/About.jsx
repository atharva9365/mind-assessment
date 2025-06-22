import React from "react";
import sideimg from "../assets/sidebarimg.jpg";
import aboutimg from "../assets/aboutimg.jpg";

const About = () => {
  return (
    <>
      <div className="text-center py-10 mt-6" id="About">
        <h1 className="text-4xl font-bold text-blue-900 inline-block border-b-4 border-blue-900 pb-2">
          About Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full h-[300px] bg-gray-300  overflow-hidden">
          <img src={sideimg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Text Right */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">
            About Aalochana
          </h2>
          <p className="mb-4 text-lg text-gray-800 leading-relaxed">
            Aalochana is a woman's resource, documentation, and research centre. Over the years, Aalochana’s scope of work has increased to include training, capacity building, and child rights. Five feminists from Maharashtra established Aalochana in 1989. Though Pune had several research institutions, none of them devoted themselves exclusively to women. The initial impulse in setting up Aalochana was to research and document, from a feminist lens, all aspects of women’s lives with a special emphasis on Maharashtra and to make resources available in English and Marathi.
          </p>
        </div>

        {/* Text Left */}
        <div className="flex flex-col justify-center h-full text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Aalochana's Mission and Vision
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Aalochana’s vision is to work towards the creation of a gender just and democratic society based on equality and freedom for all. To achieve this we have committed ourselves to the creation of awareness amongst women about their rights and what they can do to change their lives and the lives of their communities. It is towards achieving these goals that we have set up Aalochana.
          </p>
        </div>

        {/* Image Right */}
        <div className="w-full h-[300px] bg-gray-300 overflow-hidden">
          <img src={aboutimg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default About;
