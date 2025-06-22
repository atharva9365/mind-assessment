import React from 'react'
import program from "../assets/program.jpg";

const Programs = () => {
  return (
    <>
      <div className="text-center py-10 mt-2" id="Programs">
        <h1 className="text-4xl font-bold text-blue-900 inline-block border-b-4 border-blue-900 pb-2">
          Programs
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full h-[300px] bg-gray-300  overflow-hidden">
          <img src={program} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Text Right */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">
            Samvadini
          </h2>
          <p className="mb-4 text-lg text-gray-800 leading-relaxed">
            Samvadini’s genesis lies in our realization that the resources at
            the centre were under utilized by grassroots groups and people who
            were located far away as they were unable to access it. Distance,
            paucity of resources, and such factors prevent people especially
            women, from utilizing these resources available at the city centre.
          </p>
          <br />
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">
            Muskaan
          </h2>
          <p>
            Muskaan an Aalochana Initiative Against Child Sexual Abuse has been
            working on creating awareness about child sexual abuse (CSA) since
            2000. We conduct awareness and training sessions for a diverse
            population of school children, college students, parents, teachers,
            social workers, NGO workers, police personnel, observation home
            children and staff and members of local communities.
          </p>
        </div>
      </div>
    </>
  );
}

export default Programs